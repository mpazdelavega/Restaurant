package com.portafolio.restaurant.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="mesa")
public class Mesa {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_mesa;
	private int capacidad;
	
	@OneToMany(targetEntity = Tipo_mesa.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "id_tipo_mesa", referencedColumnName = "id_mesa")
	private List<Tipo_mesa> tipo_mesa;
	
	public Mesa() {
		
	}
	
	public int getId_mesa() {
		return id_mesa;
	}
	public void setId_mesa(int id_mesa) {
		this.id_mesa = id_mesa;
	}
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}

	public List<Tipo_mesa> getTipo_mesa() {
		return tipo_mesa;
	}

	public void setTipo_mesa(List<Tipo_mesa> tipo_mesa) {
		this.tipo_mesa = tipo_mesa;
	}

	
	
	
	
	
	

}
