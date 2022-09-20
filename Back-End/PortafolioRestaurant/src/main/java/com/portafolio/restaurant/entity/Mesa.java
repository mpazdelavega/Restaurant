package com.portafolio.restaurant.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mesa")
public class Mesa {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_mesa;
	private int capacidad;
	private String tipo_mesa;
	private String estado;
	
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
	public String getTipo_mesa() {
		return tipo_mesa;
	}
	public void setTipo_mesa(String tipo_mesa) {
		this.tipo_mesa = tipo_mesa;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
	

}
