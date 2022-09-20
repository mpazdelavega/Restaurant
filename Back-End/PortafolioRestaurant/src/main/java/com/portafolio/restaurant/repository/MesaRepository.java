package com.portafolio.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portafolio.restaurant.entity.Mesa;

@Repository
public interface MesaRepository extends JpaRepository<Mesa, Integer>{

}
