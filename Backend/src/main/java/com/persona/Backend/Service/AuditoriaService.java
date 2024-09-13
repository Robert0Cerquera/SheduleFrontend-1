package com.persona.Backend.Service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.persona.Backend.Entity.BaseEntity;

@Service
public class AuditoriaService {

    // Método para configurar auditoría al crear la entidad
    public void setAuditOnCreate(BaseEntity entity) {
        entity.setCreatedAt(LocalDateTime.now()); // Asigna la fecha de creación
        entity.setUpdatedAt(LocalDateTime.now()); // Asigna la fecha de actualización inicial
        entity.setState(true);                    // Asigna el estado a true
        entity.setDeletedAt(null);                // Asegura que deletedAt sea null al crear
    }

    // Método para configurar auditoría al actualizar la entidad
    public void setAuditOnUpdate(BaseEntity entity) {
        entity.setUpdatedAt(LocalDateTime.now()); // Actualiza la fecha de actualización
        // No se modifica createdAt ni deletedAt
    }

    // Método para configurar auditoría al eliminar la entidad
    public void setAuditOnDelete(BaseEntity entity) {
        entity.setDeletedAt(LocalDateTime.now()); // Asigna la fecha de eliminación
        entity.setState(false);                   // Cambia el estado a false (desactivado)
    }
}
