package com.blog.BlogApp.exception;

public class RestAPIException extends RuntimeException {

    private static final long serialVersionUID = -5772833999292688314L;

    public String field;
    public String fieldErrorCode;
    public String fieldErrorMessage;

    public RestAPIException(String message) {
        super(message);
    }

    public RestAPIException(String message, String field, String fieldErrorCode) {
        super(message);
        this.field = field;
        this.fieldErrorCode = fieldErrorCode;
    }

    public RestAPIException(Enum<?> enumConstant) {
        super(enumConstant.name());
    }

    public RestAPIException(Throwable throwable) {
        super(throwable);
    }

    public RestAPIException(String message, Throwable throwable) {
        super(message, throwable);
    }
}