package com.laduny.server.config.filter;

import com.laduny.server.exception.KeyLoadingException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

import java.io.InputStream;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

@Configuration
public class JwtKeyConfig {

    @Value("${jwt.public-key}")
    private Resource publicKeyResource;

    @Value("${jwt.private-key}")
    private Resource privateKeyResource;

    private PublicKey cachedPublicKey;
    private PrivateKey cachedPrivateKey;

    @Bean
    public PublicKey publicKey() throws KeyLoadingException {
        if (cachedPublicKey == null) {
            cachedPublicKey = loadPublicKey();
        }
        return cachedPublicKey;
    }

    @Bean
    public PrivateKey privateKey() throws KeyLoadingException {
        if (cachedPrivateKey == null) {
            cachedPrivateKey = loadPrivateKey();
        }
        return cachedPrivateKey;
    }

    private PublicKey loadPublicKey() throws KeyLoadingException {
        try (InputStream inputStream = publicKeyResource.getInputStream()) {
            byte[] keyBytes = inputStream.readAllBytes();
            String publicKeyPEM = new String(keyBytes)
                    .replace("-----BEGIN PUBLIC KEY-----", "")
                    .replace("-----END PUBLIC KEY-----", "")
                    .replaceAll("\\s+", "");
            byte[] decoded = Base64.getDecoder().decode(publicKeyPEM);
            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(decoded);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            return keyFactory.generatePublic(keySpec);
        } catch (Exception e) {
            throw new KeyLoadingException("Failed to load the public key", e);
        }
    }

    private PrivateKey loadPrivateKey() throws KeyLoadingException {
        try (InputStream inputStream = privateKeyResource.getInputStream()) {
            byte[] keyBytes = inputStream.readAllBytes();
            String privateKeyPEM = new String(keyBytes)
                    .replace("-----BEGIN PRIVATE KEY-----", "")
                    .replace("-----END PRIVATE KEY-----", "")
                    .replaceAll("\\s+", "");
            byte[] decoded = Base64.getDecoder().decode(privateKeyPEM);
            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decoded);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            return keyFactory.generatePrivate(keySpec);
        } catch (Exception e) {
            throw new KeyLoadingException("Failed to load the private key", e);
        }
    }

    @Bean
    public JwtDecoder jwtDecoder(PublicKey publicKey) {
        return NimbusJwtDecoder.withPublicKey((java.security.interfaces.RSAPublicKey) publicKey).build();
    }
}
