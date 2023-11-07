package com.veteransbenefitsapi.veteransbenefits.controller;

import org.springframework.web.bind.annotation.*;

import com.veteransbenefitsapi.veteransbenefits.enums.EnumFormatter;
import com.veteransbenefitsapi.veteransbenefits.enums.PersonalInfoEnums;

@RestController
@RequestMapping("/api/personal")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalInfoController {

    @GetMapping("/all")
    public PersonalInfoEnums getAllEnums() {
        PersonalInfoEnums response = new PersonalInfoEnums();

        response.setGenders(EnumFormatter.formatEnums(PersonalInfoEnums.Gender.values()));
        response.setResidentialStatuses(EnumFormatter.formatEnums(PersonalInfoEnums.ResidentialStatus.values()));
        response.setMaritalStatuses(EnumFormatter.formatEnums(PersonalInfoEnums.MaritalStatus.values()));
        response.setEthnicities(EnumFormatter.formatEnums(PersonalInfoEnums.Ethnicity.values()));
        response.setRelationships(EnumFormatter.formatEnums(PersonalInfoEnums.Relationship.values()));
        response.setLanguages(EnumFormatter.formatEnums(PersonalInfoEnums.Language.values()));

        return response;
    }
}
