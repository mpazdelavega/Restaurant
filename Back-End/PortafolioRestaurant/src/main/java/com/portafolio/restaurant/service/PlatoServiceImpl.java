package com.portafolio.restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portafolio.restaurant.entity.Plato;
import com.portafolio.restaurant.repository.PlatoRepository;

@Service
public class PlatoServiceImpl implements PlatoService{

	@Autowired
	PlatoRepository platoRepository;
	
	@Override
	public List<Plato> getAllPlatos() {
		return platoRepository.findAll();
	}
	
}
