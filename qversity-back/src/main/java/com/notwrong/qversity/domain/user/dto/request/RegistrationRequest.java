package com.notwrong.qversity.domain.user.dto.request;

import lombok.Getter;

@Getter
public class RegistrationRequest {
    private String nickname;
    private String token;
}
