package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PersonalInfo {

    // provided from the frontend to collect related Service info from the DB.
    private String ID;
    /**
     * State of current residency
     */
    private String state;

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
    private String zipCode;

    /**
     * User's country of residence
     */
    private String country;

    /**
     * User's gender
     */
    private String gender;

    /**
     * User's ethnicity
     */
    private String ethnicity;

    /**
     * User's emergency contact name
     */
    private String emergencyContactName;

    /**
     * User's emergency contact relationship
     */
    private String emergencyContactRelationship;

    /**
     * User's data of birth
     */
    private String dateOfBirth;

    /**
     * User's primary language
     */
    private String language;

    /**
     * User's optional suffix
     */
    private String suffix;

    /**
     * User's primary phone number
     */
    private String primaryPhone;

    /**
     * User's emergency contact's phone number
     */
    private String emergencyContactPhone;

    /**
     * User's emergency contact email
     */
    private String emergencyContactEmail;

    /**
     * User's middle name
     */
    private String middleName;

    /**
     * User's secondary phone number
     */
    private String secondaryPhone;

    /**
     * User's marital status
     */
    private String maritalStatus;

    /**
     * User's residential status
     */
    private String residentialStatus;
}
