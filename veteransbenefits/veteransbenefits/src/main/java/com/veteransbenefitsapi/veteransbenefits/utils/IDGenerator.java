package com.veteransbenefitsapi.veteransbenefits.utils;


import java.util.UUID;

/**
 * @author Carlos.E
 * created date: 11/15/2023
 *
 * Helper class which contain statitc functions to create IDs for a new users.
 *
 * */


public class IDGenerator
{
    /**
     * @param username given.
     * @return  ID for new user.
     *
     * Function used to create a new id for new user.
     * */
    public final static String userID(String username)
    {
        return  getInitials(username) + getUUID();
    }

    /**
     * @param username ( to get the first two letters).
     * @return initials (String containing the first 2 letters of the username)
     *
     * Helper method to create initials to concatenate to UUID
     * */
    private static String getInitials(String username)
    {
        return (username != null) ? username.substring(0,2) : ""; // First 2 letters in the name to form the initials.
    }

    /**
     * @return string containing a UUID of length 6.
     *
     * Helper method to create UUID.
     * */
    private static String getUUID()
    {
        return UUID.randomUUID().toString()
                .replace("-", "").substring(0,7); // Create UUID replace "-" by "" and obtain first 6 characters.
    }
}
