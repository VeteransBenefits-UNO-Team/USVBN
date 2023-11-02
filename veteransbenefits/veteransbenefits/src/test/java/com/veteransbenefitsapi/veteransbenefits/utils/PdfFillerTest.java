package com.veteransbenefitsapi.veteransbenefits.utils;

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

    static File file = new File("src/test/resources/test_forms/ReservistTuitionCredit.pdf");
    static PDDocument pdDocument;
    static PDAcroForm pdf;

    @BeforeEach
    void setup(){
        try {
            pdDocument = Loader.loadPDF(file);
            pdf = pdDocument.getDocumentCatalog().getAcroForm();
        } catch (IOException ignored){

        }
    }

    @Test
    void test_getAllFields() throws IOException {
        List<PDField> results = sut.getAllFields(pdf);

        assertFalse(results.isEmpty());
        assertEquals(38, results.size());
    }

    @Test
    void test_fillForm(){
        sut.fillForm(file);
        //TODO: Fill out rest of tests when PdfFiller is more fleshed out
    }
}
