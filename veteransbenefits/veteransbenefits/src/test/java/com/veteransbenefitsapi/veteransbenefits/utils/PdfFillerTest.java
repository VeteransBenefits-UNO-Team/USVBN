package com.veteransbenefitsapi.veteransbenefits.utils;

import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.Requirements;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class PdfFillerTest {

    PdfFiller sut = new PdfFiller();

    Form form = new Form();
    static PDDocument pdDocument;
    static PDAcroForm pdf;

    //TODO: testUser is only a test implementation for what will eventually be questionnaire data
    //TODO: Should be replaced with actual implementation when it is made
    AllUserData testUser = new AllUserData();

    @BeforeEach
    public void setup(){
        form.setPath("src/test/resources/test_forms/NebraskaReservistTuitionCredit.pdf");
        File file = new File(form.getPath());

        try {
            pdDocument = Loader.loadPDF(file);
            pdf = pdDocument.getDocumentCatalog().getAcroForm();
        } catch (IOException ignored){

        }

        testUser.setFirstName("Trevin");
        testUser.setLastName("Kotinek");
        testUser.setEmail("tkotinek@unomaha.edu");
    }

    @Test
    public void test_getAllFields() throws IOException {
        List<PDField> results = sut.getAllFields(pdf);

        assertFalse(results.isEmpty());
        assertEquals(38, results.size());
    }

    @Test
    public void test_fillEligibleForm(){
        List<PDField> result = sut.fillForm(form, testUser);

        assertFalse(result.isEmpty());
        assertEquals(38, result.size());
        assertEquals("tkotinek@unomaha.edu", result.get(0).getValueAsString());
        assertEquals("Trevin", result.get(4).getValueAsString());
        assertEquals("Kotinek", result.get(6).getValueAsString());
    }

    @Test
    public void test_skipIneligibleForm(){
        testUser.setState("Colorado");
        Requirements requirements = new Requirements();
        requirements.setState("Nebraska");
        form.setRequirements(requirements);

        assertNull(sut.fillForm(form, testUser));
    }

    @Test
    public void test_fillEligibileForm(){
        testUser.setState("Nebraska");
        testUser.setImmigrationStatus("Citizen");
        Requirements requirements = new Requirements();
        requirements.setState("Nebraska");
        requirements.setImmigrationStatus("Citizen");
        form.setRequirements(requirements);

        List<PDField> result = sut.fillForm(form, testUser);
        assertFalse(result.isEmpty());
        assertEquals(38, result.size());
        assertEquals("tkotinek@unomaha.edu", result.get(0).getValueAsString());
        assertEquals("Trevin", result.get(4).getValueAsString());
        assertEquals("Kotinek", result.get(6).getValueAsString());
    }
}
