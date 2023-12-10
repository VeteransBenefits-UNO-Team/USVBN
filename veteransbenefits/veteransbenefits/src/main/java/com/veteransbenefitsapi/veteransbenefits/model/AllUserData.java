package com.veteransbenefitsapi.veteransbenefits.model;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * An entity to represent all user responses to the questionnaire, to be updated
 * with all questionnaire response values
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
     * Service type
     */
    private String serviceType;

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

    /**
     *
     * @param value The questionnaire answer to be searched for
     * @return The field representing the questionnaire answer desired
     */
    public String getValue(String value) {
        // TODO: Some forms may have variations of the same field, may need to add new
        // case statements as we come across them.
        switch (value) {
            case "firstName":
                return this.firstName;

            case "lastName":
                return this.lastName;

            case "midInitial":
                if (this.middleName != null && !this.middleName.isEmpty()) {
                    return this.middleName.substring(0, 1);
                } else {
                    return null;
                }

            case "suffix":
                return this.suffix;

            case "dob":
                if (this.dateOfBirth != null && !this.dateOfBirth.isEmpty()) {
                    ZonedDateTime zonedDateTime = ZonedDateTime.parse(this.dateOfBirth);
                    return zonedDateTime.format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
                }
                return null;

            case "email":
                return this.email;

            case "Years Served":
                return Integer.toString(this.years);

            case "Branch":
                return this.branch;

            case "resAddress":
                return this.streetAddress;

            case "resCity":
                return this.city;

            case "resState":
                return this.residentialState;

            case "resZip":
                return this.residentialZip;

            default:
                return null;
        }
    }

    /**
     *
     * @param eligibilityInfo An EligibilityInfo object to be mapped into
     *                        AllUserData
     * @param personalInfo    A PersonalInfo object to be mapped into AllUserData
     * @return An AllUserData object with a compilation of all eligibility and
     *         personal info
     */
    public AllUserData applyAllData(EligibilityInfo eligibilityInfo, PersonalInfo personalInfo) {
        this.setYears(eligibilityInfo.getYearsOfService());
        this.setBranch(eligibilityInfo.getBranch());
        this.setComponent(eligibilityInfo.getComponent());
        this.setRankType(eligibilityInfo.getRankCategory());
        this.setRankAtDischarge(eligibilityInfo.getRankAtDischarge());
        this.setServiceType(eligibilityInfo.getServiceType());

        this.setResidentialState(personalInfo.getState());
        this.setImmigrationStatus(personalInfo.getImmigrationStatus());
        this.setFirstName(personalInfo.getFirstName());
        this.setLastName(personalInfo.getLastName());
        this.setEmail(personalInfo.getEmail());
        this.setEmail(personalInfo.getEmail());
        this.setStreetAddress(personalInfo.getStreetAddress());
        this.setCity(personalInfo.getCity());
        this.setResidentialZip(personalInfo.getZipCode());
        this.setCountry(personalInfo.getCountry());
        this.setGender(personalInfo.getGender());
        this.setEthnicity(personalInfo.getEthnicity());
        this.setEmergencyContactName(personalInfo.getEmergencyContactName());
        this.setEmergencyContactRelationship(personalInfo.getEmergencyContactRelationship());
        this.setDateOfBirth(personalInfo.getDateOfBirth());
        this.setLanguage(personalInfo.getLanguage());
        this.setSuffix(personalInfo.getSuffix());
        this.setPrimaryPhone(personalInfo.getPrimaryPhone());
        this.setEmergencyContactPhone(personalInfo.getEmergencyContactPhone());
        this.setMiddleName(personalInfo.getMiddleName());
        this.setSecondaryPhone(personalInfo.getMiddleName());
        this.setMaritalStatus(personalInfo.getMaritalStatus());
        this.setResidentialStatus(personalInfo.getResidentialStatus());

        return this;
    }
}
