package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VerificationCodeResponseDTO {
    private String message;
    private String accessToken;
}
