package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

/**
 * An entity to represent form requirements
 */
@Data
public class Requirements {
    /**
     * The residing state requiring for this form
     */
    private String state;
    /**
     * The immigration status required for this form
     */
    private String immigrationStatus;


    /**
     *
     * @param userData The compilation of all the users responses to the questionnaire
     * @return True is the questionnaire answers match all requirement (Null values return true automatically)
     */
    public boolean isEligible(AllUserData userData){
        return (compareState(userData.getState()) && compareImmigrationStatus(userData.getImmigrationStatus()));
    }

    /**
     *
     * @param state The state the user resides in, retrieved from AllUserData
     * @return True if the state requirement is null or the state matches the requirement state
     */
    private boolean compareState(String state){
        if (this.state == null){
            return true;
        }
        return this.state.equals(state);
    }

    /**
     *
     * @param immigrationStatus The immigration status of the user, retrieved from AllUserData
     * @return True if the immigration status requirement is null or the user's immigration status matches the requirement
     */
    private boolean compareImmigrationStatus(String immigrationStatus){
        if(this.immigrationStatus == null){
            return true;
        }
        return this.immigrationStatus.equals(immigrationStatus);
    }
}
