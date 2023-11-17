package com.veteransbenefitsapi.veteransbenefits.service.authservice;

import com.veteransbenefitsapi.veteransbenefits.model.entities.Users;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
import com.veteransbenefitsapi.veteransbenefits.repository.authrepo.IAuthRepo;
import com.veteransbenefitsapi.veteransbenefits.service.JwtService;
import com.veteransbenefitsapi.veteransbenefits.utils.IDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author Carlos.E
 * date: 11/15/2023
 *
 * Service class which implement all available sercices
 *
 * */

@Service
public class SAuth implements IAuth
{
    private static final Logger logger = Logger.getLogger(SAuth.class.getName());

    //Repos
    @Autowired
    private IAuthRepo iAuthRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * @param requestAuth object containing username and authKey.
     * @return ResponseAuth object containing user's id, progress and jwt. 403 forbidden error if fails authentication
     * <p>
     * Use to authenticate user and generate needed info to access the system.
     */
    @Override
    public ResponseAuth logIn(RequestAuth requestAuth)
    {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestAuth.getUsername(),
                        requestAuth.getAuthKey()
                )
        );

        // if successful
        var user = iAuthRepo.findUser(requestAuth.getUsername()).get();
        var jwt = jwtService.generateToken(user);

        return ResponseAuth.builder()
                .ID(user.getUsersID())
                .progress(user.getProgress())
                .jwt(jwt)
                .build();
    }

    /**
     * @param requestAuth object containing username and authKey.
     * @return ResponseAuth object containing user's id, progress and jwt.
     * <p>
     * Use to create a new user authenticate it and generate needed info to access the system.
     */
    @Override
    public ResponseEntity<ResponseAuth> signUp(RequestAuth requestAuth)
    {
        ResponseEntity<ResponseAuth> responseEntity;

        if(!iAuthRepo.findUser(requestAuth.getUsername()).isPresent())
        {
           try
           {
                var user = Users.builder()
                        .usersID(IDGenerator.userID(requestAuth.getUsername()))
                        .userName(requestAuth.getUsername())
                        .authKey(passwordEncoder.encode(requestAuth.getAuthKey()))
                        .lastLogin(new Date(System.currentTimeMillis()))
                        .build();
                iAuthRepo.save(user);

                responseEntity = new ResponseEntity<>(this.logIn(requestAuth), HttpStatus.CREATED);
           }
           catch (Exception e)
           {
               logger.log(Level.SEVERE,"An error occurred while doing something.", e);
               responseEntity = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
           }
        }
        else
        {
            responseEntity = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        return responseEntity;
    }
}
