package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

@Data
public class EligibilityInfo {
    private int years;
    private String branch;
    private String component;
    private String rankType;
    private String rankAtDischarge;
}
