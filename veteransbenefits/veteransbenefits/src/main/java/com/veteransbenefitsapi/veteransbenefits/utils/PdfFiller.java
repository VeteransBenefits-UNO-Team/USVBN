package com.veteransbenefitsapi.veteransbenefits.utils;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class PdfFiller {

    public void fillForm(File pdfFile){

        try(PDDocument pdDocument = Loader.loadPDF(pdfFile)){

            PDAcroForm pdf = pdDocument.getDocumentCatalog().getAcroForm();

            List<PDField> allFields = getAllFields(pdf);

            for(PDField field : allFields){

            }
        } catch (IOException e){
            e.printStackTrace();
        }
    }

    public List<PDField> getAllFields(PDAcroForm pdf) {
            if (pdf != null){
                List<PDField> fields = pdf.getFields();

                return fields;
            }

        return Collections.emptyList();
    }
}
