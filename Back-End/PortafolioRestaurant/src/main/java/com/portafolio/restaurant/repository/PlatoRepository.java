package com.portafolio.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portafolio.restaurant.entity.Plato;

@Repository
public interface PlatoRepository extends JpaRepository<Plato, Integer>{

}
