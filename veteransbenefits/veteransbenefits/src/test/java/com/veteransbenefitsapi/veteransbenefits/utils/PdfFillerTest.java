package com.veteransbenefitsapi.veteransbenefits.utils;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

public class PdfFillerTest {

    PdfFiller sut = new PdfFiller();

    static File file = new File("src/test/resources/test_forms/NebraskaReservistTuitionCredit.pdf");
    static PDDocument pdDocument;
    static PDAcroForm pdf;

    //TODO: testUser is only a test implementation for what will eventually be questionnaire data
    //TODO: Should be replaced with actual implementation when it is made
    Map<String, String> testUser = new HashMap<>();

    @BeforeEach
    void setup(){
        try {
            pdDocument = Loader.loadPDF(file);
            pdf = pdDocument.getDocumentCatalog().getAcroForm();
        } catch (IOException ignored){

        }

        testUser.put("firstName", "Trevin");
        testUser.put("lastName", "Kotinek");
        testUser.put("Email Address", "tkotinek@unomaha.edu");
    }

    @Test
    void test_getAllFields() throws IOException {
        List<PDField> results = sut.getAllFields(pdf);

        assertFalse(results.isEmpty());
        assertEquals(38, results.size());
    }

    @Test
    void test_fillForm(){
        List<PDField> result = sut.fillForm(file, testUser);

        assertFalse(result.isEmpty());
        assertEquals(38, result.size());
        assertEquals("tkotinek@unomaha.edu", result.get(0).getValueAsString());
        assertEquals("Trevin", result.get(4).getValueAsString());
        assertEquals("Kotinek", result.get(6).getValueAsString());
    }
}
