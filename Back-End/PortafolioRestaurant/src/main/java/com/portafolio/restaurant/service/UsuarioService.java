package com.portafolio.restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portafolio.restaurant.entity.Usuario;
import com.portafolio.restaurant.repository.UserRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UserRepository userRepo;
	
	
//	public Usuario crearUsuario() {
//		
//		
//		Usuario user = new Usuario();
//		
//		user.setUsername("manuel");
//		user.setPassword("$2a$10$bYoJmNdhupkco44HP77Ce.oi2HKcEFlHOM3n.qAyx6L17W4bZZ33C");
//		
//		return userRepo.save(user);
//	}
	
//	public void saveOrUpdate(Usuario usuario) {
//		userRepo.save(usuario);
//	}
	
	public Iterable<Usuario> listAll() {
        return this.userRepo.findAll();
    }
}
