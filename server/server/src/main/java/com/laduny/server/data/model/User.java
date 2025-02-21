package com.laduny.server.data.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User extends Audit {

    @Id
    @Column(name = "ID", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "mfa_enabled", nullable = false)
    private boolean mfa_enabled;

    @Column(name = "status", nullable = false)
    private String status = Status.ACTIVE.toString();

    @Column(name = "secret")
    private String secret;

    @Column(name = "temporary_password")
    private String temporary_password;

    @Column(name = "temporary_password_expired")
    private LocalDateTime temporary_password_expired;

    @Column(name = "forcePasswordChange")
    private boolean forcePasswordChange;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    public User orElseThrow(Object object) {
        return null;
    }

}
