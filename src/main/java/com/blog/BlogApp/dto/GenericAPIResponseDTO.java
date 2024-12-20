package com.blog.BlogApp.dto;


import com.fasterxml.jackson.databind.annotation.JsonSerialize;


/**
 * A simple DTO which is used to transfer the end state of request processing back
 * to the client.
 */
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL )
public class GenericAPIResponseDTO {
    public enum RequestStatus {
        ERROR,
        SUCCESS
    }

    private RequestStatus status;

    private Object result;

    private String message;

    private GenericAPIResponseDTO() {
    }

    public static GenericAPIResponseDTO createSuccessfulResponse(Object result) {
        GenericAPIResponseDTO built = new GenericAPIResponseDTO();
        built.status = RequestStatus.SUCCESS;
        built.result = result;
        return built;
    }

    public static GenericAPIResponseDTO createSuccessfulResponse() {
        GenericAPIResponseDTO built = new GenericAPIResponseDTO();
        built.status = RequestStatus.SUCCESS;
        return built;
    }

    public static GenericAPIResponseDTO createErrorResponse() {
        return new Builder(RequestStatus.ERROR, null, null).build();
    }

    public static GenericAPIResponseDTO createErrorResponse(String message) {
        return new Builder(RequestStatus.ERROR, message, null).build();
    }

    public static Builder getBuilder(RequestStatus status, String message) {
        return new Builder(status, message, null);
    }

    public RequestStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public Object getResult() {
        return result;
    }

    public static class Builder {
        private GenericAPIResponseDTO built;

        public Builder(RequestStatus status, String message, Object result) {
            built = new GenericAPIResponseDTO();
            built.status = status;
            built.message = message;
            built.result = result;
        }

        public GenericAPIResponseDTO build() {
            return built;
        }
    }
}