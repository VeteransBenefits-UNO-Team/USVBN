package com.veteransbenefitsapi.veteransbenefits.model;

import lombok.Data;

@Data
public class EligibilityInfo {
    /**
     * Years served
     */
    private int years;

    /**
     * Branch served in
     */
    private String branch;

    /**
     * Rank component
     */
    private String component;

    /**
     * Rank type
     */
    private String rankType;

    /**
     * Rank when discharged
     */
    private String rankAtDischarge;
}
