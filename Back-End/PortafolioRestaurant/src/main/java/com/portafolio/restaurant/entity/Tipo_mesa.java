package com.portafolio.restaurant.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tipo_mesa")
public class Tipo_mesa {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int is_tipo_mesa;
	private String descripcion;
	
	public Tipo_mesa(int is_tipo_mesa, String descripcion) {
		this.is_tipo_mesa = is_tipo_mesa;
		this.descripcion = descripcion;
	}
	public Tipo_mesa() {
		
	}
	public int getIs_tipo_mesa() {
		return is_tipo_mesa;
	}
	public void setIs_tipo_mesa(int is_tipo_mesa) {
		this.is_tipo_mesa = is_tipo_mesa;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
	
}
