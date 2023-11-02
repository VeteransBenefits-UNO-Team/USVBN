package com.veteransbenefitsapi.veteransbenefits.controller;

import org.springframework.web.bind.annotation.*;

import com.veteransbenefitsapi.veteransbenefits.enums.EligibilityInfoEnums;
import com.veteransbenefitsapi.veteransbenefits.enums.EnumFormatter;

@RestController
@RequestMapping("/api/eligibility")
@CrossOrigin(origins = "http://localhost:4200")
public class EligibilityInfoController {

    @GetMapping("/all")
    public EligibilityInfoEnums getAllEnums() {
        EligibilityInfoEnums response = new EligibilityInfoEnums();

        response.setServiceTypes(EnumFormatter.formatEnums(EligibilityInfoEnums.ServiceType.values()));
        response.setBranches(EnumFormatter.formatEnums(EligibilityInfoEnums.Branch.values()));
        response.setRankCategories(EnumFormatter.formatEnums(EligibilityInfoEnums.RankCategory.values()));
        response.setArmyRanks(EnumFormatter.formatEnums(EligibilityInfoEnums.ArmyRanks.values()));
        response.setNavyRanks(EnumFormatter.formatEnums(EligibilityInfoEnums.NavyRanks.values()));
        response.setAirForceRanks(EnumFormatter.formatEnums(EligibilityInfoEnums.AirForceRanks.values()));
        response.setMarineRanks(EnumFormatter.formatEnums(EligibilityInfoEnums.MarineRanks.values()));
        response.setCoastGuardRanks(EnumFormatter.formatEnums(EligibilityInfoEnums.CoastGuardRanks.values()));

        return response;
    }

}
