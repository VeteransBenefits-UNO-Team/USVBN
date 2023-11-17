package com.veteransbenefitsapi.veteransbenefits.model.entities;

/**
 * @author Carlos.E
 * created date: 11/15/2023
 *
 * Enum type to hold the roles use for spring boot authentication.
 *
 * Roles are not stored in the DB since our system is not based on roles
 * but pre-assigned for authentication purposes with spring boot framework.
 * */

public enum Role
{
    USER
}
