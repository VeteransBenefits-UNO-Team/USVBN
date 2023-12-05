package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

@Data
public class PersonalInfo {
    /**
     * State of current residency
     */
    private String residentialState;

    /**
     * User's immigration status
     */
    private String immigrationStatus;

    /**
     * User's first name
     */
    private String firstName;

    /**
     * User's last name
     */
    private String lastName;

    /**
     * User's email address
     */
    private String email;

    /**
     * User's residential address
     */
    private String streetAddress;

    /**
     * User's residential city
     */
    private String city;

    /**
     * User's residential zipcode
     */
    private String residentialZip;
}
