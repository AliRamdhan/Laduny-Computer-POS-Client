package com.laduny.server.data.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laduny.server.data.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
}
