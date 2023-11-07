package com.veteransbenefitsapi.veteransbenefits.enums;

import lombok.Data;

@Data
public class PersonalInfoEnums {

    private String[] genders;
    private String[] residentialStatuses;
    private String[] maritalStatuses;
    private String[] ethnicities;
    private String[] relationships;
    private String[] languages;

    public enum Gender {
        MALE,
        FEMALE,
        OTHER
    }

    public enum ResidentialStatus {
        OWN,
        RENT
    }

    public enum MaritalStatus {
        SINGLE,
        MARRIED,
        WIDOWED,
        DIVORCED,
        SEPARATED
    }

    public enum Ethnicity {
        AMERICAN_INDIAN_OR_ALASKA_NATIVE,
        ASIAN,
        BLACK_OR_AFRICAN_AMERICAN,
        HISPANIC_OR_LATINO,
        NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER,
        WHITE,
        PREFER_NOT_TO_SAY
    }

    public enum Relationship {
        SPOUSE,
        CHILD,
        PARENT
    }

    public enum Language {
        ENGLISH,
        SPANISH,
        FRENCH,
        GERMAN,
        OTHER
    }

}
