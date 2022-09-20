package com.portafolio.restaurant.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="platos")
public class Plato {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_platos;
	private String nombre;
	private String categoria;
	private float precio;
	private String foto;
	
	public Plato() {

	}
	public int getId_platos() {
		return id_platos;
	}
	public void setId_platos(int id_platos) {
		this.id_platos = id_platos;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public float getPrecio() {
		return precio;
	}
	public void setPrecio(float precio) {
		this.precio = precio;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	
	
}
