package com.notwrong.qversity.domain.user.service;

import com.notwrong.qversity.domain.user.entity.User;
import com.notwrong.qversity.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<User> findBySocialId(Long socialId) {
        return userRepository.findBySocialLogin_SocialId(socialId);
    }
}
