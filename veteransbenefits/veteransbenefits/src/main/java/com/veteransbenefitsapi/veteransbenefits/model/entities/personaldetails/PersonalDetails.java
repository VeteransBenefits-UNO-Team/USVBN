package com.veteransbenefitsapi.veteransbenefits.model.entities.personaldetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author Carlos.E
 * date: 11/15/2023
 *
 * Class encalsulating user personal details.
 *
 * Note: this data will be requested at the end of the questionaire and will not be store in the DB.
 *
 * if the user has completed all previous question will be rederected to the part of the questionnaire when log in
 * to reenter this info
 *
 * */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonalDetails
{
    // Personal Data
    private String firstName;
    private String lastName;
    private String middleName;
    private String suffix;
    private Date date;
    private String gender;
    private String phoneNumber;
    private String secondaryPhoneNumber;
    private String email;

    // Address info
    private String streetAddress;
    private String state;
    private String city;
    private String zipCode;

    //Emergency contact
    private String contactName;
    private String contactRelationship;
    private String contactPhone;
    private String contactEmail;

    // Civil status
    private String residentialStatus;
    private String ethnicity;
    private String maritialStatus;

    // Language
    private String language;


}
