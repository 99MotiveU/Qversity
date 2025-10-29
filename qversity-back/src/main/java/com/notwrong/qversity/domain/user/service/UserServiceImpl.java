package com.notwrong.qversity.domain.user.service;

import com.notwrong.qversity.domain.user.entity.SocialLogin;
import com.notwrong.qversity.domain.user.entity.User;
import com.notwrong.qversity.domain.user.repository.UserRepository;
import com.notwrong.qversity.global.exception.ErrorCode;
import com.notwrong.qversity.global.exception.BaseException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final SocialLoginService socialLoginService;

    @Override
    public Optional<User> findBySocialId(Long socialId) {
        return userRepository.findBySocialLogin_SocialId(socialId);
    }

    @Override
    @Transactional
    public void registerUser(String nickname, String providerUniqueId) {
        // Check for duplicate nickname
        if (userRepository.findByNickname(nickname).isPresent()) {
            throw new BaseException(ErrorCode.DUPLICATE_NICKNAME);
        }

        // Find SocialLogin using the providerUniqueId
        Optional<SocialLogin> socialLoginOptional = socialLoginService.findByProviderUniqueId(providerUniqueId);
        if (socialLoginOptional.isEmpty()) {
            throw new BaseException(ErrorCode.SOCIAL_LOGIN_NOT_FOUND);
        }
        SocialLogin socialLogin = socialLoginOptional.get();

        // Create new User
        User user = User.builder()
                .socialLogin(socialLogin)
                .nickname(nickname)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        userRepository.save(user);
    }
}
