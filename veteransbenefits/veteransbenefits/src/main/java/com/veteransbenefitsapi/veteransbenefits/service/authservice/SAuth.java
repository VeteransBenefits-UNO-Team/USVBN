package com.veteransbenefitsapi.veteransbenefits.service.authservice;

import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.PersonalInfo;
import com.veteransbenefitsapi.veteransbenefits.model.entities.ServiceDetails;
import com.veteransbenefitsapi.veteransbenefits.model.entities.Users;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.questionaire.ServiceDetailsAnswers;
import com.veteransbenefitsapi.veteransbenefits.repository.authrepo.IAuthRepo;
import com.veteransbenefitsapi.veteransbenefits.repository.authrepo.IServiceDetailsRepo;
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
import java.util.List;
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
    private IServiceDetailsRepo iServiceDetailsRepo;

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

    /**
     * @param serviceDetailsAnswers answers to thw Service Detail questions
     * @return ResposeEntity
     * <p>
     * Return values
     * OK 201; true : if the answers were saved correctly on the DB
     * <p>
     * BAD_REQUEST 400; false: otherwise
     */
    @Override
    public ResponseEntity<Boolean> saveServDetails(ServiceDetailsAnswers serviceDetailsAnswers)
    {
        ResponseEntity<Boolean> responseEntity;

        try
        {
            System.out.println(serviceDetailsAnswers.getID() + ": ID");
            System.out.println(serviceDetailsAnswers.getBranch() + ": Branch");

            var answers = ServiceDetails.builder()
                            .ID(serviceDetailsAnswers.getID())
                            .yearsOfService(serviceDetailsAnswers.getYearsOfService())
                            .branch(serviceDetailsAnswers.getBranch())
                            .serviceType(serviceDetailsAnswers.getServiceType())
                            .rankCategory(serviceDetailsAnswers.getRankCategory())
                            .rankAtDischarge(serviceDetailsAnswers.getRankAtDischarge()).build();

            iServiceDetailsRepo.save(answers);

            responseEntity = new ResponseEntity<>(true, HttpStatus.OK);
        }
        catch (Exception e)
        {
            System.out.println(e);
            responseEntity = new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
        return responseEntity;
    }

    /**
     * @param id releted to the answers to be retrieved
     * @return ResposeEntity
     * <p>
     * Return values
     * OK 200; ServiceDetails : if answers are saved on the DB
     * <p>
     * NOT_FOUND 404; null: otherwise
     */
    @Override
    public ResponseEntity<ServiceDetails> loadServDetails(String id)
    {
        ResponseEntity<ServiceDetails> responseEntity;

        try
        {
           var responses = iServiceDetailsRepo.findById(id);

           responseEntity = responses.isPresent() ? new ResponseEntity<>(responses.get(), HttpStatus.OK)
                   : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        catch (Exception e)
        {
            responseEntity = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return responseEntity;
    }

    /**
     * @param personalInfo personal info given from the user.
     * @return A list containing all form populated with info
     * <p>
     * Used to marge the personal info with the service info and fill forms.
     */
    @Override
    public ResponseEntity<List<Form>> submit(PersonalInfo personalInfo)
    {
        return null;
    }
}
