package com.SamuelDevelop.sgn.repository;

import com.SamuelDevelop.sgn.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
