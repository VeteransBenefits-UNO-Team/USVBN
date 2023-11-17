package com.veteransbenefitsapi.veteransbenefits.repository.authrepo;

import com.veteransbenefitsapi.veteransbenefits.model.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

/**
 * @author Carlos.E
 *
 * date: 11/15/2023
 *
 * Repo to manipulate auth request to the DB
 *
 * */

public interface IAuthRepo extends JpaRepository<Users, String>
{
    /**
     * @param username
     * @return an object of type Users.
     *
     * Used to find user progress
     * */
    @Query(value = "Select * from users where username = ?1", nativeQuery = true)
    Optional<Users> findUser(String username);
}
