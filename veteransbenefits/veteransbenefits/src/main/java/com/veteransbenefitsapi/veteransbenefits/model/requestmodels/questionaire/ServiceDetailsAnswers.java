package com.veteransbenefitsapi.veteransbenefits.model.requestmodels.questionaire;

import com.veteransbenefitsapi.veteransbenefits.model.entities.ServiceDetails;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * @author Carlos.E
 * date: 11/28/2023
 *
 * Request model to contain the answers from the service detail section.
 * **/


@Data
@Builder
@AllArgsConstructor
public class ServiceDetailsAnswers
{

    private String ID;


    private int yearsOfService;


    private String branch;


    private String serviceType;


    private String rankCategory;


    private String rankAtDischarge;
}
