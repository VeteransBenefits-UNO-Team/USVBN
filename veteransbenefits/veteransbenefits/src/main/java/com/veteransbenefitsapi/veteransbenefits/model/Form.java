package com.veteransbenefitsapi.veteransbenefits.model;

import jakarta.persistence.criteria.From;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


/**
 * An entity to represent the forms in the application
 */
@Data
public class Form {
    /**
     * The name of the form
     */
    private String name;
    /**
     * The path to the form in our application from content root (e.g. src/main/resources/forms/...)
     */
    private String path;
    /**
     * The requirements for this particular form (If none then leave null)
     */
    private Requirements requirements;

    /**
     *
     * @param userData The compilation of all the users responses to the questionnaire
     * @return True if no requirements or if user responses meet document's requirements
     */
    public boolean determineEligibility(AllUserData userData){
        return (requirements == null || requirements.isEligible(userData));
    }

    /**
     *
     * @return A list of all forms that our application currently offers.
     */
    public List<Form> getAllForms(){
        List<Form> allForms = new ArrayList<>();
        allForms.add(NebraskaReservistTuition());
        allForms.add(createForm("VA_Appeal.pdf"));
        allForms.add(createForm("CHAMPVA_Other_Health_Insurance.pdf"));
        allForms.add(createForm("Supplemental_Claim.pdf"));
        allForms.add(createForm("High_Level_Review.pdf"));
        allForms.add(createForm("Support_Claim_For_PTSD_Secondary_To_Personal_Assault.pdf"));
        allForms.add(createForm("Support_Claim_For_PTSD.pdf"));
        allForms.add(createForm("Witness_Statement.pdf"));
        allForms.add(createForm("Housebound_Or_Permanent_Aid_Examination.pdf"));
        allForms.add(createForm("Claim_Support_Statement.pdf"));
        allForms.add(createForm("Authorization_To_Disclose_Information.pdf"));
        allForms.add(createForm("Disability_Compensation_And_Related_Benefits.pdf"));
        allForms.add(createForm("Application_For_Increased_Compensation_Based_On_Unemployability.pdf"));

        return allForms;
    }


    private Form createForm(String name){
        Form form = new Form();
        form.setName(name);
        form.setPath("src/main/resources/forms/" + name);
        return form;
    }

    private Form NebraskaReservistTuition(){
        Requirements req = new Requirements();
        req.setImmigrationStatus("Citizen");
        req.setState("Nebraska");

        Form form = createForm("Nebraska_Reservist_Tuition_Credit.pdf");
        form.setRequirements(req);
        return form;
    }

}
