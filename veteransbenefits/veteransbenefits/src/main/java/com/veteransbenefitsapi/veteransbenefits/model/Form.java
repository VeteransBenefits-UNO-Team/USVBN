package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

import java.util.List;
import com.veteransbenefitsapi.veteransbenefits.enums.*;

@Data
public class Form {
    private String name;
    private String path;
    private Requirements requirements;

    public boolean determineEligibility(AllUserData userData){
        return requirements.isEligible(userData);
    }
}
