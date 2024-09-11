package com.persona.Backend.Utils;

public class ApiResponseDto<T> {
	//este documento permite mostrar las respuesta de las apis de una manera mas organizada por decirlo asi, donde toma mensaje, estado, data del body de la respuesta
		private Boolean status;
	    private T data;
	    private String message;
	    
	    
	    public ApiResponseDto() {
	        
	    }
	    
	    
	    public ApiResponseDto(String message, T data, Boolean status) {
	        this.message = message;
	        this.data = data;
	        this.status = status;
	    }

	   
	    public Boolean getStatus() {
	        return status;
	    }

	   
	    public void setStatus(Boolean status) {
	        this.status = status;
	    }

	    
	    public T getData() {
	        return data;
	    }

	   
	    public void setData(T data) {
	        this.data = data;
	    }

	    
	    public String getMessage() {
	        return message;
	    }

	    
	    public void setMessage(String message) {
	        this.message = message;
	    }
}
