package com.notwrong.qversity.global.config;

import com.notwrong.qversity.global.auth.oauth2.OAuth2FailureHandler;
import com.notwrong.qversity.global.auth.oauth2.OAuth2SuccessHandler;
import com.notwrong.qversity.global.auth.oauth2.OAuth2UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public OAuth2UserServiceImpl oAuth2UserServiceImpl() {
        return new OAuth2UserServiceImpl();
    }

    @Bean
    public OAuth2SuccessHandler oAuth2SuccessHandler() {
        return new OAuth2SuccessHandler();
    }

    @Bean
    public OAuth2FailureHandler oAuth2FailureHandler() {
        return new OAuth2FailureHandler();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorization -> authorization
                        .requestMatchers("/api/welcome", "/api/oauth2/**", "/api/user/signup", "/api/user/logout").permitAll()
                        .requestMatchers("/api/**").authenticated()
                        .anyRequest().permitAll())
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login")
                        .userInfoEndpoint(userInfo -> userInfo
                                .userService(oAuth2UserServiceImpl()))
                        .successHandler(oAuth2SuccessHandler())
                        .failureHandler(oAuth2FailureHandler()));

        return http.build();
    }
}
