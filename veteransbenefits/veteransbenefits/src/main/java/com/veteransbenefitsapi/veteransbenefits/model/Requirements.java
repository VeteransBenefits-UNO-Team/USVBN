package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

@Data
public class Requirements {
    private String state;
    private String immigrationStatus;


    public boolean isEligible(AllUserData userData){
        return (compareState(userData.getState()) && compareImmigrationStatus(userData.getImmigrationStatus()));
    }

    private boolean compareState(String state){
        if (this.state == null){
            return true;
        }
        return this.state.equals(state);
    }

    private boolean compareImmigrationStatus(String immigrationStatus){
        if(this.immigrationStatus == null){
            return true;
        }
        return this.immigrationStatus.equals(immigrationStatus);
    }
}
