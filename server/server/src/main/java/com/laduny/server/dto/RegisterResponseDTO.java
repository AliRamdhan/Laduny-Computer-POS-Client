package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterResponseDTO {

    private String message;
    private boolean mfaEnabled;
    private String secretImageUrl;

    public RegisterResponseDTO(String message) {
        this.message = message;
    }
}
