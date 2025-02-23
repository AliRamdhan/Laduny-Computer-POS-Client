package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthLogRequestDTO {
    private LocalDateTime lastLoginAttempt;
    private LocalDateTime lastLogoutAttempt;
    private Boolean isLogout;
    private UUID userId;
}
