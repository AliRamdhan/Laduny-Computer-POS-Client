package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenerateTemproraryPasswordResponseDTO {
    private String message;
    private String temproraryPassword;
}
