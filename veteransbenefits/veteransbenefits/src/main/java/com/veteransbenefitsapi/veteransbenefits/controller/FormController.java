package com.veteransbenefitsapi.veteransbenefits.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.cj.xdevapi.JsonArray;
import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.EligibilityInfo;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.PersonalInfo;
import com.veteransbenefitsapi.veteransbenefits.utils.PdfFiller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/fillForms")
@CrossOrigin(origins = "http://localhost:4200")
public class FormController {

    /**
     *
     * @param data The data sent from the front end of the application
     * @return A list of form objects representing the filled forms
     * @throws JsonProcessingException
     */
    @PostMapping("/fill")
    public ResponseEntity<List<String>> FillForms(@RequestBody String data) throws JsonProcessingException {
        PdfFiller filler = new PdfFiller();
        JSONObject jsonObject = new JSONObject(data);

        JSONObject eligibilityData = jsonObject.getJSONObject("eligibility");
        JSONObject personalData = jsonObject.getJSONObject("personalInfo");

        System.out.println("\n\n" + eligibilityData + "\n\n" + personalData);

        EligibilityInfo eligibilityInfo = new ObjectMapper().readValue(eligibilityData.toString(), EligibilityInfo.class);
        PersonalInfo personalInfo = new ObjectMapper().readValue(personalData.toString(), PersonalInfo.class);

        AllUserData userData = new AllUserData().applyAllData(eligibilityInfo, personalInfo);


        List<Form> allForms = new Form().getAllForms();
        List<String> results = new ArrayList<>();

        for(Form thisForm : allForms){
            Form filledForm = filler.fillForm(thisForm, userData);
            if(filledForm != null){
                results.add(filledForm.getPath());
            }
        }

        ResponseEntity<List<String>> response = results.size() > 0 ? new ResponseEntity<>(results, HttpStatus.OK)
                : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return response;
    }
}
