package com.persona.Backend.Service.Jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    // Simulación de base de datos de usuarios. Puedes reemplazarlo por una llamada a tu base de datos real.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Aquí deberías buscar el usuario en la base de datos
        if ("usuario".equals(username)) {
            return org.springframework.security.core.userdetails.User
                    .withUsername("usuario")
                    .password("{bcrypt}$2a$10$7NqD8KbNp2Ohz4zDkKIFPeylfeReKbcBvUE/YUs1/rNIBYmIKHPDO") // Contraseña "password" encriptada con BCrypt
                    .roles("USER")
                    .build();
        } else {
            throw new UsernameNotFoundException("Usuario no encontrado con el nombre: " + username);
        }
    }
}
