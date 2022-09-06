package com.portafolio.restaurant.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="usuario")
public class Usuario implements UserDetails{

	private static final long serialVersionUID = 1L;

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_usuario;
	
	private String nombre;
	
	private String apellido;
	
	private String username;
	
	private String password;
	
	private String id_tipo_usuario;
	
	//private List<Rol> roles = new ArrayList<>();

	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		List<GrantedAuthority> roles = new ArrayList<>(); 
		roles.add(new Rol("ROL_CLIENTE"));
		return roles;
	}

	public void setCorreo(String correo) {
		this.username = correo;
	}

	public void setContrasena(String contrasena) {
		this.password = contrasena;
	}

	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getId_tipo_usuario() {
		return id_tipo_usuario;
	}

	public void setId_tipo_usuario(String id_tipo_usuario) {
		this.id_tipo_usuario = id_tipo_usuario;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	
	
}
