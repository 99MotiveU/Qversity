package com.notwrong.qversity.domain.user.service;

import com.notwrong.qversity.domain.user.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findBySocialId(Long socialId);

    // TODO: createUser
}
