package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequestDTO {

    private String username;
    private String email;
    private String password;
    private UUID roleId;
    private boolean mfaEnabled;
}
