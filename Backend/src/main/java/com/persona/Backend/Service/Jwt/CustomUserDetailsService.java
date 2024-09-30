package com.persona.Backend.Service.Jwt;

import com.persona.Backend.Entity.Security.Usuario;
import com.persona.Backend.IRepository.Security.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Busca el usuario en la base de datos
        Optional<Usuario> optionalUsuario = usuarioRepository.findByUsuarioNombre(username);

        // Comprobar si el usuario está presente
        if (optionalUsuario.isPresent()) {
            Usuario usuario = optionalUsuario.get(); // Obtener el usuario
            return org.springframework.security.core.userdetails.User
                    .withUsername(usuario.getUsuarioName())
                    .password(usuario.getContrasenia()) // Asegúrate de que esta contraseña sea la encriptada
                    .roles("USER")
                    .build();
        } else {
            throw new UsernameNotFoundException("Usuario no encontrado con el nombre: " + username);
        }
    }
}
