package com.laduny.server.data.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users_auth_log")
@EntityListeners(AuditingEntityListener.class)
public class UserAuthLog extends Audit {

    @Id
    @Column(name = "ID", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "last_login_attempt", nullable = false, unique = true)
    private LocalDateTime lastLoginAttempt;

    @Column(name = "last_logout_attempt", nullable = false, unique = true)
    private LocalDateTime lastLogoutAttempt;

    @Column(name = "is_logout", nullable = false, unique = true)
    private Boolean isLogout;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

}
