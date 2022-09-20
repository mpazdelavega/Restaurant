package com.portafolio.restaurant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portafolio.restaurant.entity.Mesa;
import com.portafolio.restaurant.service.MesaService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mesa")
public class MesaController {
	
	@Autowired
	MesaService mesaService;
	
	@GetMapping("/getAll")
	public List<Mesa> getAllMesas(){
		return mesaService.getAllMesas();
	}

}
