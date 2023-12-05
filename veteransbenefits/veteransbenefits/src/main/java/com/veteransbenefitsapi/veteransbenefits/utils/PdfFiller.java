package com.veteransbenefitsapi.veteransbenefits.utils;

import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

/**
 * A utility class for filling out as many form fields as possible
 */
public class PdfFiller {

    /**
     *
     * @param form The form object to be filled
     * @param userData The compilation of all the users responses to the questionnaire
     * @return Null is there is an error or the user is not eligible, else the updated form
     */
    public Form fillForm(Form form, AllUserData userData){

        if(!form.determineEligibility(userData)){
            return null;
        }

        File file = new File(form.getPath());

        try(PDDocument pdDocument = Loader.loadPDF(file)){

            PDAcroForm pdf = pdDocument.getDocumentCatalog().getAcroForm();

            List<PDField> allFields = getAllFields(pdf);

            for(PDField field : allFields){
                String value = userData.getValue(field.getFullyQualifiedName());

                if(value != null){
                    field.setValue(value);
                }
            }

            /*
            Rudimentary way to save new updated documents, prints the file url to console, so you can open the new file
            in a browser.  You can test this by running any PdfFiller tests where the form is actually filled out.
             */
            pdDocument.save("src/main/resources/updatedForms/" + form.getName());
            Form updatedForm = new Form();
            updatedForm.setPath("src/main/resources/updatedForms/" + form.getName());

            // Print out link to updated form
            File updatedFile = new File(updatedForm.getPath());
            System.out.println(updatedFile.toURI().toURL());

            // Return the updated form
            return updatedForm;
        } catch (IOException e){
            e.printStackTrace();
        }

        return null;
    }

    /**
     *
     * @param pdf The form being filled in PDAcroForm format
     * @return The list of all fields found in the form
     */
    public List<PDField> getAllFields(PDAcroForm pdf) {
            if (pdf != null){
                List<PDField> fields = pdf.getFields();

                return fields;
            }

        return Collections.emptyList();
    }
}
