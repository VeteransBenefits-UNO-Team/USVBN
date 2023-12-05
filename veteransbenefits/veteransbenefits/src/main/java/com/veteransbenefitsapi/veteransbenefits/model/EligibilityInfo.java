package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

@Data
public class EligibilityInfo {
    /**
     * Years served
     */
    private int yearsOfService;

    /**
     * Branch served in
     */
    private String branch;

    /**
     * Rank component
     */
    private String component;

    /**
     * Category of rank
     */
    private String rankCategory;

    /**
     * Rank when discharged
     */
    private String rankAtDischarge;

    /**
     * Service type
     */
    private String serviceType;
}
