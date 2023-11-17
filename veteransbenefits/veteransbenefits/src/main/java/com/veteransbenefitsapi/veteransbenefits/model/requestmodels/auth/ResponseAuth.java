package com.veteransbenefitsapi.veteransbenefits.model.requestmodels.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * @author Carlos.E
 *
 * Date: 11/15/2023
 *
 * Class encasualting respons data after log in and sign up.
 *
 * */

@Data
@Builder
@AllArgsConstructor
public class ResponseAuth
{
    private String ID; //user ID to relate answers to tables.
    private int progress; //where the user last left it.
    private String jwt; // token needed to access private endpoints in the api
}
