package com.veteransbenefitsapi.veteransbenefits.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class FormTest {
    private Form sut;
    private Requirements requirements;

    @BeforeEach
    private void setup(){
        requirements = new Requirements();
        requirements.setState("Nebraska");
        requirements.setImmigrationStatus("Citizen");

        sut = new Form();
        sut.setName("Nebraska Reservist Tuition Credit");
        sut.setPath("src/test/resources/test_forms/NebraskaReservistTuitionCredit.pdf");
        sut.setRequirements(requirements);
    }

    @Test
    public void test_isEligible(){
        AllUserData userData = new AllUserData();
        userData.setState("Nebraska");
        userData.setImmigrationStatus("Citizen");

        assertTrue(sut.determineEligibility(userData));
    }

    @Test
    public void test_pathIsValid(){
        File file = new File(sut.getPath());
        assertTrue(file.canRead());
    }
}
