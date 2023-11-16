package com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * @author Carlos.E
 *
 * Date: 11/15/2023
 *
 * Class with data to log in or sign up a user to the system.
 * */

@Data
@Builder
@AllArgsConstructor
public class RequestAuth
{
    private String username;
    private String authKey;
}
