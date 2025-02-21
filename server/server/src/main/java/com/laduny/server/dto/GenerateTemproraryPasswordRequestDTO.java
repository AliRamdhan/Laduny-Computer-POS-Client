package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenerateTemproraryPasswordRequestDTO {
    private String email;
}
