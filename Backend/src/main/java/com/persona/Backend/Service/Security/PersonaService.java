package com.persona.Backend.Service.Security;

import com.persona.Backend.Entity.Security.Persona;
import com.persona.Backend.IRepository.Security.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonaService {

    @Autowired
    private IPersonaRepository personaRepository;

    public Persona save(Persona persona) {
        return personaRepository.save(persona);
    }

    public Optional<Persona> findById(Long id) {
        return personaRepository.findById(id);
    }

    public Persona update(Long id, Persona persona) {
        if (personaRepository.existsById(id)) {
            persona.setId(id); // Asegúrate de que el ID se mantenga para la actualización
            return personaRepository.save(persona);
        } else {
            throw new RuntimeException("Persona no encontrada");
        }
    }

    public void delete(Long id) {
        personaRepository.deleteById(id);
    }
}
