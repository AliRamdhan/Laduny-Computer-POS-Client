package com.laduny.server.service;

import com.laduny.server.dto.ChangePasswordRequestDTO;
import com.laduny.server.dto.ChangePasswordResponseDTO;
import com.laduny.server.dto.GenerateTemproraryPasswordRequestDTO;
import com.laduny.server.dto.GenerateTemproraryPasswordResponseDTO;
import com.laduny.server.dto.LoginRequestDTO;
import com.laduny.server.dto.LoginResponseDTO;
import com.laduny.server.dto.RegisterRequestDTO;
import com.laduny.server.dto.RegisterResponseDTO;
import com.laduny.server.dto.VerificationCodeRequestDTO;
import com.laduny.server.dto.VerificationCodeResponseDTO;

public interface AuthService {
    RegisterResponseDTO authRegister(RegisterRequestDTO registerRequestDTO);

    LoginResponseDTO authLogin(LoginRequestDTO loginRequestDTO);

    VerificationCodeResponseDTO authVerifyOTPCode(VerificationCodeRequestDTO verificationCodeRequestDTO);

    GenerateTemproraryPasswordResponseDTO authGenerateTemproraryPassword(
            GenerateTemproraryPasswordRequestDTO generateTemproraryPasswordRequestDTO);

    ChangePasswordResponseDTO authChangePassword(ChangePasswordRequestDTO changePasswordRequestDTO);

}
