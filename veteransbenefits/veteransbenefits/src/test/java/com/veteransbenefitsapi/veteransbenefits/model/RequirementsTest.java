package com.veteransbenefitsapi.veteransbenefits.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class RequirementsTest {
    private Requirements sut = new Requirements();
    private AllUserData userData;


    @BeforeEach
    private void setup(){
        sut.setImmigrationStatus("Citizen");
        sut.setState("Nebraska");

        userData = new AllUserData();
        userData.setState("Nebraska");
        userData.setImmigrationStatus("Citizen");
    }

    @Test
    public void test_isEligibile(){
        assertTrue(sut.isEligible(userData));
    }

    @Test
    public void test_wrongImmigrationStatus(){
        userData.setImmigrationStatus("Non-Citizen");
        assertFalse(sut.isEligible(userData));
    }

    @Test
    public void test_wrongState(){
        userData.setState("Colorado");
        assertFalse(sut.isEligible(userData));
    }

    @Test
    public void test_noImmigrationRequirement(){
        sut = new Requirements();
        sut.setState("Nebraska");

        assertTrue(sut.isEligible(userData));
    }

    @Test
    public void test_noStateRequirement(){
        sut = new Requirements();
        sut.setImmigrationStatus("Citizen");

        assertTrue(sut.isEligible(userData));
    }

    @Test
    public void test_noRequirements(){
        sut = new Requirements();
        assertTrue(sut.isEligible(userData));
    }
}
