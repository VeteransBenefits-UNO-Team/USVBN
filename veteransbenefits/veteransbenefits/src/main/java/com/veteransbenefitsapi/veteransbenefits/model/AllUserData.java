package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

/**
 * An entity to represent all user responses to the questionnaire, to be updated with all questionnaire response values
 */
@Data
public class AllUserData {
    /**
     * Years served
     */
    private int years;

    /**
     * Branch served in
     */
    private String branch;

    /**
     *
     */
    private String component;

    /**
     * Rank type while serving
     */
    private String rankType;

    /**
     * Rank when discharged
     */
    private String rankAtDischarge;

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
     *
     * @param value The questionnaire answer to be searched for
     * @return The field representing the questionnaire answer desired
     */
    public String getValue(String value){
        // TODO: Some forms may have variations of the same field, may need to add new case statements as we come across them.
        switch (value) {
            case "firstName":
                return this.firstName;

            case "lastName":
                return this.lastName;

            case "Email Address":
                return this.email;

            case "Years Served":
                return Integer.toString(this.years);
                
            case "Branch":
                return this.branch;

            default:
                return null;
        }
    }
}
