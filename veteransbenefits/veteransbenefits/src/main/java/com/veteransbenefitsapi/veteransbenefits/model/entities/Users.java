package com.veteransbenefitsapi.veteransbenefits.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * @author Carlos.E
 * date: 11/15/2023
 *
 * Entity Java class representing the users' table in DB.
 * */

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class Users implements UserDetails
{
    @Id
    @Column(name = "users_id", nullable = false, length = 10)
    private String usersID;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String userName;

    @Column(name = "auth_key", nullable = false)
    private String authKey;

    @Column(name = "progress", nullable = false)
    private int progress = 0; // Used to determine in what section the user left.

    @Column(name = "last_login", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date lastLogin; // Used to safe delete data not accessed more than 72 Hs.

    @Enumerated(EnumType.STRING)
    @Transient
    private Role role = Role.USER;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "usersInfo")
    @JsonManagedReference
    private ServiceDetails serviceDetails; // users' service detail info.

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return this.authKey;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
