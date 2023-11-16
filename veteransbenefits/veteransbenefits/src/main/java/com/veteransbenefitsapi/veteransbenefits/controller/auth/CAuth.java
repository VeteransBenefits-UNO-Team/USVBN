package com.veteransbenefitsapi.veteransbenefits.controller.auth;

import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
import com.veteransbenefitsapi.veteransbenefits.service.authservice.SAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author Carlos.E
 * date: 11/15/2023
 *
 * Controller containing endpoind for authentication and sign up process.
 *
 * Public accesible endpoints
 *
 * */

@RestController
@RequestMapping("/api/auth/")
public class CAuth
{
    @Autowired
    private SAuth sAuth;

    /**
     * Open endpoint
     * url : {server}/api/auth/login
     *
     * Request Post; Receives info needed for user login
     *
     * Return values:
     * OK 202: if login successful and return a ResponseAuth data
     * Bad request 400: user not found or bad credentials
     * */
    @GetMapping("login")
    public ResponseEntity<ResponseAuth> logIn(@RequestBody RequestAuth requestAuth)
    {
        var response  = sAuth.logIn(requestAuth);

        return response.getJwt() != null ? new ResponseEntity<>(response, HttpStatus.OK)
                : new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    /**
     * Open endpoint
     * url : {server}/api/auth/signup
     *
     * Request Post; Receives info needed for user signup
     *
     * Return values:
     * OK 2021: if signup successful and return a ResponseAuth data
     * Bad request 400: user not found or bad credentials
     * */
    @PostMapping("signup")
    public ResponseEntity<ResponseAuth> signUp(@RequestBody RequestAuth requestAuth)
    {
        return sAuth.signUp(requestAuth);
    }
}
