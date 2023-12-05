package com.veteransbenefitsapi.veteransbenefits.service.authservice;


import com.veteransbenefitsapi.veteransbenefits.model.entities.ServiceDetails;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.questionaire.ServiceDetailsAnswers;
import org.springframework.http.ResponseEntity;

/**
 * @author Carlos.E
 * date: 11/15/2023
 *
 * Interface containing all availible functions to be implemeneted by SAuth
 *
 * */

public interface IAuth
{

    /**
     * @param requestAuth object containing username and authKey.
     * @return ResponseAuth object containing user's id, progress and jwt. 403 forbidden error if fails authentication
     *
     * Use to authenticate user and generate needed info to access the system.
     *
     * */
    ResponseAuth logIn(RequestAuth requestAuth);

    /**
     * @param requestAuth object containing username and authKey.
     * @return ResponseAuth object containing user's id, progress and jwt.
     *
     * Use to create a new user authenticate it and generate needed info to access the system.
     *
     * */
    ResponseEntity<ResponseAuth> signUp(RequestAuth requestAuth);

    /**
     * @param serviceDetailsAnswers answers to thw Service Detail questions
     * @return ResposeEntity
     *
     * Return values
     * OK 200; true : if the answers were saved correctly on the DB
     *
     * BAD_REQUEST 400; false: otherwise
     *
     * */
    ResponseEntity<Boolean> saveServDetails(ServiceDetailsAnswers serviceDetailsAnswers);

    /**
     * @param id releted to the answers to be retrieved
     * @return ResposeEntity
     *
     * Return values
     *  OK 200; ServiceDetails : if answers are saved on the DB
     *
     *  NOT_FOUND 404; null: otherwise
     *
     * */
    ResponseEntity<ServiceDetails> loadServDetails(String id);

}
