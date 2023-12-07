package com.veteransbenefitsapi.veteransbenefits.controller.auth;


import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.PersonalInfo;
import com.veteransbenefitsapi.veteransbenefits.model.entities.ServiceDetails;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.questionaire.ServiceDetailsAnswers;
import com.veteransbenefitsapi.veteransbenefits.service.authservice.SAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
@CrossOrigin(origins = "http://localhost:4200")
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
     * OK 201: if signup successful and return a ResponseAuth data
     * Bad request 400: user not found or bad credentials
     * */
    @PostMapping("signup")
    public ResponseEntity<ResponseAuth> signUp(@RequestBody RequestAuth requestAuth)
    {
        return sAuth.signUp(requestAuth);
    }

    /**
     * Close endpoint: JWT needed
     * url: {server}/api/auth/save/servdetails
     *
     * Request POST: Receives answers by the user from the Service Details questions
     *
     * Return values
     * OK 200; true : if the answers were saved correctly on the DB
     *
     * BAD_REQUEST 400; false: otherwise
     *
     * */
    @PostMapping("save/servdetails")
    public ResponseEntity<Boolean> saveServDetails(@RequestBody ServiceDetailsAnswers serviceDetailsAnswers)
    {
        System.out.println(serviceDetailsAnswers.getID() + ": ID");
        return sAuth.saveServDetails(serviceDetailsAnswers);
    }

    /**
     * Close endpoint: JWT needed
     * url: {server}/api/auth/load/servdetails/{id}
     *
     * Request GET: to load answers of a given user from the Service Details questions
     *
     * Return values
     * OK 200; ServiceDetails : if answers are saved on the DB
     *
     * NOT_FOUND 404; null: otherwise
     *
     * */
    @GetMapping("load/servdetails/{id}")
    public ResponseEntity<ServiceDetails> loadServDetails(@PathVariable String id)
    {
        return sAuth.loadServDetails(id);
    }

    /**
     * Close endpoint: JWT needed
     * url: {server}/api/auth/submit
     *
     * Request GET: Receives answers by the user from the Persona Details questions and merge them with
     * the service details answers and fill applicable PDF form
     *
     * Return values
     * OK 200; List<String></> : if request went right
     *
     * BAD_REQUEST 401; null: otherwise
     *
     * */
    @GetMapping("submit")
    public ResponseEntity<List<String>> submitAndFillPDF(@RequestBody PersonalInfo personalInfo)
    {
        return  sAuth.submit(personalInfo);
    }
}
