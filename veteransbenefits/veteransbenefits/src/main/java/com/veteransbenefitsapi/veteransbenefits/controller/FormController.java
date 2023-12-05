package com.veteransbenefitsapi.veteransbenefits.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.cj.xdevapi.JsonArray;
import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.EligibilityInfo;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.PersonalInfo;
import com.veteransbenefitsapi.veteransbenefits.utils.PdfFiller;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/fillForms")
@CrossOrigin(origins = "http://localhost:4200")
public class FormController {

    @PostMapping("/fill")
    public List<Form> FillForms(@RequestBody String data) throws JsonProcessingException {
        PdfFiller filler = new PdfFiller();
        JSONObject jsonObject = new JSONObject(data);

        JSONObject eligibilityData = jsonObject.getJSONObject("eligibility");
        JSONObject personalData = jsonObject.getJSONObject("personalInfo");

        System.out.println("\n\n" + eligibilityData + "\n\n" + personalData);

        // TODO: Works To this point, work on mapper
        // Data in userData.json example in tests

        EligibilityInfo eligibilityInfo = new ObjectMapper().readValue(eligibilityData.toString(), EligibilityInfo.class);
        PersonalInfo personalInfo = new ObjectMapper().readValue(personalData.toString(), PersonalInfo.class);

        AllUserData userData = new AllUserData().applyAllData(eligibilityInfo, personalInfo);


        List<Form> allForms = new Form().getAllForms();
        List<Form> results = new ArrayList<>();

        for(Form thisForm : allForms){
            Form filledForm = filler.fillForm(thisForm, userData);
            if(filledForm != null){
                results.add(filledForm);
            }
        }

        System.out.println("\n\n" + userData);

        return results;
    }
}
