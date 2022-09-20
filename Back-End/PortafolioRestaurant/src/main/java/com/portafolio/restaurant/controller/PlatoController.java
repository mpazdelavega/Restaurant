package com.portafolio.restaurant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portafolio.restaurant.entity.Plato;
import com.portafolio.restaurant.service.PlatoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/plato")
public class PlatoController {
	
	@Autowired
	private PlatoService platoService;
	
	@GetMapping("/getAll")
	public List<Plato> getAllStudents(){
		return platoService.getAllPlatos();
	}
	
}
