package com.laduny.server.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Service
public class TokenService {

    private final PrivateKey privateKey;
    private final PublicKey publicKey;

    @Value("${jwt.expiration-time}")
    private long expirationTime; // Waktu kedaluwarsa token dalam milidetik

    @PostConstruct
    public void init() {
        if (expirationTime == 0) {
            expirationTime = 3600000; // Default 1 jam jika tidak diatur di konfigurasi
        }
    }

    public TokenService(PrivateKey privateKey, PublicKey publicKey) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }

    // Ekstrak email dari JWT token
    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Mengekstrak klaim tertentu dari token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        return extractAllClaims(token).map(claimsResolver).orElse(null);
    }

    // Mengekstrak semua klaim dari token (dengan Optional untuk keamanan)
    public Optional<Claims> extractAllClaims(String token) {
        try {
            return Optional.of(
                    Jwts.parserBuilder()
                            .setSigningKey(publicKey)
                            .build()
                            .parseClaimsJws(token)
                            .getBody());
        } catch (Exception e) {
            return Optional.empty(); // Mengembalikan empty jika parsing gagal
        }
    }

    // Mengecek apakah token sudah kedaluwarsa
    public boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    // Menghasilkan JWT token dengan RSA private key
    public String generateToken(String username, String email) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("email", email);
        return createToken(claims, email);
    }

    // Membuat JWT token dengan klaim yang diberikan
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime)) // Durasi bisa diatur dari config
                .signWith(privateKey, SignatureAlgorithm.RS256)
                .compact();
    }

    // Validasi Token dengan Public Key (RSA)
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(publicKey).build().parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    // Ambil Username dari Token
    public String getUsernameFromToken(String token) {
        return extractClaim(token, Claims::getSubject);
    }
}
