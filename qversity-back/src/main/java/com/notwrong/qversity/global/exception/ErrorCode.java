package com.notwrong.qversity.global.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {

    COMMON_BAD_REQUEST(ErrorCode.valueOf("COMMON_BAD_REQUEST"), "잘못된 요청입니다.");

    private final ErrorCode code;
    private final String message;

    ErrorCode(ErrorCode code, String message) {
        this.code = code;
        this.message = message;
    }
}
