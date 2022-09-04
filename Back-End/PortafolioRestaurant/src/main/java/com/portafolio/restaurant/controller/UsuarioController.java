package com.portafolio.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portafolio.restaurant.entity.Usuario;
import com.portafolio.restaurant.service.UserService;
import com.portafolio.restaurant.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UserService userService;
	
//	@PostMapping("")
//	public ResponseEntity<?> crearUsuario () {
//		Usuario newUsuario = usuarioService.crearUsuario();
//		
//		return ResponseEntity.ok(newUsuario);
//	}
	
	@PostMapping("/add")
	private String add(@RequestBody Usuario usuario)  
	{  
		userService.saveUsuario(usuario);  
		return  "Nuevo usuario agregado";  
	}
	
	@GetMapping("/getall")
	public Iterable<Usuario>getUsuarios()
	{
	return usuarioService.listAll();    
	}
	
}
