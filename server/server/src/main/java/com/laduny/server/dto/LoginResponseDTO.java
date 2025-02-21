package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {
    private String message;
    private String otp;
    private boolean mfaEnabled;
    private String accessToken;

    public LoginResponseDTO(String message, String accessToken) {
        this.message = message;
        this.accessToken = accessToken;
    }

    public LoginResponseDTO(String message, boolean mfaEnabled, String otp) {
        this.message = message;
        this.mfaEnabled = mfaEnabled;
        this.otp = otp;
    }
}
