package com.persona.Backend.Service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.persona.Backend.Entity.BaseEntity;

@Service
public class AuditoriaService {

	 public void setAuditOnCreate(BaseEntity entity) {
	        entity.setCreatedAt(LocalDateTime.now());
	        entity.setUpdatedAt(LocalDateTime.now());
	        entity.setState(true);
	        entity.setDeletedAt(null);
	    }

	    public void setAuditOnUpdate(BaseEntity entity) {
	        entity.setUpdatedAt(LocalDateTime.now());
	    }

	    public void setAuditOnDelete(BaseEntity entity) {
	        entity.setDeletedAt(LocalDateTime.now());
	        entity.setState(false);
	    }
}
