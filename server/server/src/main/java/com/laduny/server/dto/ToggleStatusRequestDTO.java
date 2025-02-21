package com.laduny.server.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToggleStatusRequestDTO {
    private UUID requestId;
}
