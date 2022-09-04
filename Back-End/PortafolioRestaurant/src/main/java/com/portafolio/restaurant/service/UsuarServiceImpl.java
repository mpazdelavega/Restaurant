package com.portafolio.restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.portafolio.restaurant.entity.Usuario;
import com.portafolio.restaurant.repository.UserRepository;

@Service
public class UsuarServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	PasswordEncoder passwordEncoder;
	
	public UsuarServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}
	
	@Override
	public Usuario saveUsuario(Usuario usuario) {
		String encodedPassword = this.passwordEncoder.encode(usuario.getPassword());
		usuario.setPassword(encodedPassword);
		return userRepository.save(usuario);
	}

}
