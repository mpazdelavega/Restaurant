package com.portafolio.restaurant.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tipo_mesa")
public class Tipo_mesa {

	@Id
	private int id_tipo_mesa;
	private String descripcion;
	

	public Tipo_mesa() {
		
	}
	public int getId_tipo_mesa() {
		return id_tipo_mesa;
	}
	public void setId_tipo_mesa(int is_tipo_mesa) {
		this.id_tipo_mesa = is_tipo_mesa;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
