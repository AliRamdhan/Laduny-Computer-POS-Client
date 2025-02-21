package com.laduny.server.service;

import org.springframework.stereotype.Service;

import com.laduny.server.data.model.AuthUser;
import com.laduny.server.data.model.User;
import com.laduny.server.data.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class AuthUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public AuthUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        // Query berdasarkan username atau email
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException(
                        "User not found with username or email : " + usernameOrEmail));

        return new AuthUser(user);
    }

}
