package com.SamuelDevelop.sgn.controller;

import com.SamuelDevelop.sgn.model.Usuario;
import com.SamuelDevelop.sgn.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioRepository repository;

    public UsuarioController(UsuarioRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return repository.save(usuario);
    }
}
