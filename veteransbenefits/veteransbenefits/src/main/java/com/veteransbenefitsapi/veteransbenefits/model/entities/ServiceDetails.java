package com.veteransbenefitsapi.veteransbenefits.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Carlos.E
 * date 11/15/2023
 *
 * Entity class represented general services details info
 * */
@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServiceDetails
{
    @Id
    @Column(name = "users_id", nullable = false, length = 10)
    private String ID;

    @Column(name = "years_of_service", nullable = false)
    private int yearsOfService;

    @Column(name = "branch", nullable = false, length = 30)
    private String branch;

    @Column(name = "service_type", nullable = false, length = 30)
    private String serviceType;

    @Column(name = "rank_category", nullable = false, length = 30)
    private String rankCategory;

    @Column(name = "rank_at_discharge", nullable = false, length = 30)
    private String rankAtDischarge;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JsonBackReference
    @JoinColumn(name = "users_id")
    private Users usersInfo; // info about the related client
}
