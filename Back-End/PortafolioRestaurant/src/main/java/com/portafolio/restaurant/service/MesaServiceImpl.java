package com.portafolio.restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portafolio.restaurant.entity.Mesa;
import com.portafolio.restaurant.repository.MesaRepository;

@Service
public class MesaServiceImpl implements MesaService{

	@Autowired
	MesaRepository mesaRepository;
	
	@Override
	public List<Mesa> getAllMesas() {
		return mesaRepository.findAll();
	}

}
