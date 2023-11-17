package com.veteransbenefitsapi.veteransbenefits.service.authservice;


import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.RequestAuth;
import com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth.ResponseAuth;
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

}
