package com.notwrong.qversity.global.auth.oauth2;

import com.notwrong.qversity.domain.user.entity.SocialLogin;
import com.notwrong.qversity.domain.user.entity.User;
import com.notwrong.qversity.domain.user.service.SocialLoginService;
import com.notwrong.qversity.domain.user.service.UserService;
import com.notwrong.qversity.global.auth.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final SocialLoginService socialLoginService;
    private final UserService userService;

    @Override
    @Transactional
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        OAuth2Provider provider = OAuth2Provider.valueOf(userRequest.getClientRegistration().getRegistrationId().toUpperCase());

        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(provider, oAuth2User.getAttributes());

        SocialLogin socialLogin = socialLoginService.createSocialLogin(userInfo.getEmail(), provider, userInfo.getProviderUniqueId());

        Optional<User> userOptional = userService.findBySocialId(socialLogin.getSocialId());
        User user;
        if (userOptional.isEmpty()) {
            user = userService.registerBySocial(socialLogin, "새로운 유저"); // 임시 닉네임
        } else {
            user = userOptional.get();
        }

        return CustomUserDetails.create(user, oAuth2User.getAttributes());
    }
}
