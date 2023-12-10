package com.veteransbenefitsapi.veteransbenefits.utils;

import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;

/**
 * A utility class for filling out as many form fields as possible
 */
public class PdfFiller {

    /**
     * Fills a form and saves it as a temporary file.
     * 
     * @param form     The form object to be filled
     * @param userData The compilation of all the user's responses to the
     *                 questionnaire
     * @return The updated form with the path of the temporary file, or null in case
     *         of error or ineligibility.
     */
    public Form fillForm(Form form, AllUserData userData) {
        if (!form.determineEligibility(userData)) {
            return null;
        }

        File file = new File(form.getPath());

        try (PDDocument pdDocument = Loader.loadPDF(file)) {
            PDAcroForm pdfForm = pdDocument.getDocumentCatalog().getAcroForm();
            List<PDField> allFields = getAllFields(pdfForm);

            for (PDField field : allFields) {
                String value = userData.getValue(field.getFullyQualifiedName());

                if (value != null) {
                    field.setValue(value);
                }
            }

            // Save to a temporary file
            Path tempFilePath = Files.createTempFile(form.getName(), ".pdf");
            pdDocument.save(tempFilePath.toFile());

            // Create and return the updated form with the path to the temporary file
            Form updatedForm = new Form();
            updatedForm.setPath(tempFilePath.toString());
            return updatedForm;

        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * Retrieves all fields from a PDAcroForm.
     * 
     * @param pdf The PDAcroForm of the form being filled
     * @return A list of all fields found in the form
     */
    public List<PDField> getAllFields(PDAcroForm pdf) {
        if (pdf != null) {
            return pdf.getFields();
        }
        return Collections.emptyList();
    }
}
