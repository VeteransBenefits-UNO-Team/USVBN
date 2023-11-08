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

        // Setting the rank arrays for each service branch
        response.setArmyRanks(new String[][] {
                EnumFormatter.formatEnums(EligibilityInfoEnums.ArmyRanksEnlisted.values()),
                EnumFormatter.formatEnums(EligibilityInfoEnums.ArmyRanksOfficer.values())
        });
        response.setNavyRanks(new String[][] {
                EnumFormatter.formatEnums(EligibilityInfoEnums.NavyRanksEnlisted.values()),
                EnumFormatter.formatEnums(EligibilityInfoEnums.NavyRanksOfficer.values())
        });
        response.setAirForceRanks(new String[][] {
                EnumFormatter.formatEnums(EligibilityInfoEnums.AirForceRanksEnlisted.values()),
                EnumFormatter.formatEnums(EligibilityInfoEnums.AirForceRanksOfficer.values())
        });
        response.setMarineRanks(new String[][] {
                EnumFormatter.formatEnums(EligibilityInfoEnums.MarineRanksEnlisted.values()),
                EnumFormatter.formatEnums(EligibilityInfoEnums.MarineRanksOfficer.values())
        });
        response.setCoastGuardRanks(new String[][] {
                EnumFormatter.formatEnums(EligibilityInfoEnums.CoastGuardRanksEnlisted.values()),
                EnumFormatter.formatEnums(EligibilityInfoEnums.CoastGuardRanksOfficer.values())
        });

        return response;
    }
}
