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

    // TODO: testUser is only a test implementation for what will eventually be
    // questionnaire data
    // TODO: Should be replaced with actual implementation when it is made
    AllUserData testUser = new AllUserData();

    @BeforeEach
    public void setup() {
        form.setPath("../../forms/Nebraska_Reservist_Tuition_Credit.pdf");
        form.setName("Nebraska_Reservist_Tuition_Credit.pdf");
        File file = new File(form.getPath());

        try {
            pdDocument = Loader.loadPDF(file);
            pdf = pdDocument.getDocumentCatalog().getAcroForm();
        } catch (IOException ignored) {

        }

        testUser.setFirstName("Trevin");
        testUser.setLastName("Kotinek");
        testUser.setEmail("tkotinek@unomaha.edu");
        testUser.setResidentialState("NE");
        testUser.setImmigrationStatus("Citizen");
        testUser.setStreetAddress("111 1st St.");
        testUser.setCity("Omaha");
        testUser.setResidentialZip("61234");
    }

    @Test
    public void test_getAllFields() throws IOException {
        List<PDField> results = sut.getAllFields(pdf);

        assertFalse(results.isEmpty());
        assertEquals(38, results.size());
    }

    @Test
    public void test_fillEligibleForm() throws IOException {
        Form result = sut.fillForm(form, testUser);

        File file = new File(result.getPath());
        PDDocument resultDocument = Loader.loadPDF(file);
        List<PDField> resultFields = resultDocument.getDocumentCatalog().getAcroForm().getFields();

        assertFalse(resultFields.isEmpty());
        assertEquals(38, resultFields.size());

        assertEquals("tkotinek@unomaha.edu", resultFields.get(37).getValueAsString());
        assertEquals("Trevin", resultFields.get(3).getValueAsString());
        assertEquals("Kotinek", resultFields.get(5).getValueAsString());
    }

    @Test
    public void test_skipIneligibleForm() {
        testUser.setResidentialState("CO");
        Requirements requirements = new Requirements();
        requirements.setState("NE");
        form.setRequirements(requirements);

        assertNull(sut.fillForm(form, testUser));
    }

    @Test
    public void test_fillEligibileForm() throws IOException {
        Requirements requirements = new Requirements();
        requirements.setState("NE");
        requirements.setImmigrationStatus("Citizen");
        form.setRequirements(requirements);

        Form result = sut.fillForm(form, testUser);

        File file = new File(result.getPath());
        PDDocument resultDocument = Loader.loadPDF(file);
        List<PDField> resultFields = resultDocument.getDocumentCatalog().getAcroForm().getFields();

        assertFalse(resultFields.isEmpty());
        assertEquals(38, resultFields.size());
        assertEquals("tkotinek@unomaha.edu", resultFields.get(37).getValueAsString());
        assertEquals("Trevin", resultFields.get(3).getValueAsString());
        assertEquals("Kotinek", resultFields.get(5).getValueAsString());
    }
}
