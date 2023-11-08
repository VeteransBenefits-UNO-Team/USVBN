package com.veteransbenefitsapi.veteransbenefits.utils;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class PdfFiller {

    //TODO: The user Map should be replaced with whatever implementation of questionnaire results we use (See test also)
    public List<PDField> fillForm(File pdfFile, Map<String, String> user){

        try(PDDocument pdDocument = Loader.loadPDF(pdfFile)){

            PDAcroForm pdf = pdDocument.getDocumentCatalog().getAcroForm();

            List<PDField> allFields = getAllFields(pdf);

            for(PDField field : allFields){
                if(user.get(field.getFullyQualifiedName()) != null){
                    field.setValue(user.get(field.getFullyQualifiedName()));
                }
            }

            return allFields;
        } catch (IOException e){
            e.printStackTrace();
        }

        return null;
    }

    public List<PDField> getAllFields(PDAcroForm pdf) {
            if (pdf != null){
                List<PDField> fields = pdf.getFields();

                return fields;
            }

        return Collections.emptyList();
    }
}
