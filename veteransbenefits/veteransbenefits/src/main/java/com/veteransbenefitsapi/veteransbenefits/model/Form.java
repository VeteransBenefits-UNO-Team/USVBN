package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;


/**
 * An entity to represent the forms in the application
 */
@Data
public class Form {
    /**
     * The name of the form
     */
    private String name;
    /**
     * The path to the form in our application from content root (e.g. src/main/resources/forms/...)
     */
    private String path;
    /**
     * The requirements for this particular form (If none then leave null)
     */
    private Requirements requirements;

    /**
     *
     * @param userData The compilation of all the users responses to the questionnaire
     * @return True if no requirements or if user responses meet document's requirements
     */
    public boolean determineEligibility(AllUserData userData){
        return (requirements == null || requirements.isEligible(userData));
    }
}
