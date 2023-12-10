package com.veteransbenefitsapi.veteransbenefits.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.veteransbenefitsapi.veteransbenefits.model.AllUserData;
import com.veteransbenefitsapi.veteransbenefits.model.EligibilityInfo;
import com.veteransbenefitsapi.veteransbenefits.model.Form;
import com.veteransbenefitsapi.veteransbenefits.model.PersonalInfo;
import com.veteransbenefitsapi.veteransbenefits.utils.PdfFiller;
import org.json.JSONObject;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.Resource;

import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.charset.StandardCharsets;
import java.net.URLEncoder;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
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
    public ResponseEntity<List<String>> FillForms(@RequestBody String data)
            throws JsonProcessingException, UnknownHostException {
        PdfFiller filler = new PdfFiller();
        JSONObject jsonObject = new JSONObject(data);

        JSONObject eligibilityData = jsonObject.getJSONObject("eligibility");
        JSONObject personalData = jsonObject.getJSONObject("personalInfo");

        System.out.println("\n\n" + eligibilityData + "\n\n" + personalData);

        EligibilityInfo eligibilityInfo = new ObjectMapper().readValue(eligibilityData.toString(),
                EligibilityInfo.class);
        PersonalInfo personalInfo = new ObjectMapper().readValue(personalData.toString(), PersonalInfo.class);

        AllUserData userData = new AllUserData().applyAllData(eligibilityInfo, personalInfo);

        List<Form> allForms = new Form().getAllForms();
        List<String> results = new ArrayList<>();

        String baseUrl = "http://" + InetAddress.getLocalHost().getHostAddress() + ":8080/api/fillForms/pdf?path=";
        for (Form thisForm : allForms) {
            Form filledForm = filler.fillForm(thisForm, userData);
            if (filledForm != null) {
                try {
                    String encodedPath = URLEncoder.encode(filledForm.getPath(), StandardCharsets.UTF_8.toString());
                    String formUrl = baseUrl + encodedPath;
                    results.add(formUrl);
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }
        }

        ResponseEntity<List<String>> response = results.size() > 0 ? new ResponseEntity<>(results, HttpStatus.OK)
                : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return response;
    }

    @GetMapping("/pdf")
    public ResponseEntity<Resource> getPdf(@RequestParam String path) {
        try {
            Path filePath = Paths.get(path);
            Resource file = new FileSystemResource(filePath);

            return ResponseEntity
                    .ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "inline; filename=\"" + filePath.getFileName().toString() + "\"")
                    .body(file);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}
