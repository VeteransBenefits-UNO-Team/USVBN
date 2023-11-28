package com.veteransbenefitsapi.veteransbenefits.repository.authrepo;


import com.veteransbenefitsapi.veteransbenefits.model.entities.ServiceDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Carlos.E
 *
 * date: 11/15/2023
 *
 * Repo to manipulate auth request to the DB related to the ServiceDetails entity.
 *
 * */

public interface IServiceDetailsRepo extends JpaRepository<ServiceDetails, String>
{
}
