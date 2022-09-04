package com.portafolio.restaurant.config;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.portafolio.restaurant.filter.JwtFilter;
import com.portafolio.restaurant.service.UserDetailsServiceImpl;

@EnableWebSecurity
public class SecurityConfig{

	@Autowired
	UserDetailsServiceImpl userDetailsService;
		
	@Autowired
	private JwtFilter jwtFilter;
	
	@Bean
	PasswordEncoder getPasswordEncoder() {
	    return new BCryptPasswordEncoder();
	}
	

	@Bean
	public AuthenticationManager authManager(HttpSecurity http, UserDetailsServiceImpl userDetailService) 
	  throws Exception {
	    return http.getSharedObject(AuthenticationManagerBuilder.class)
	      .userDetailsService(userDetailsService)
	      .passwordEncoder(getPasswordEncoder())
	      .and()
	      .build();
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	    http.csrf()
	      .disable()
	      .cors()
	      .and();
	    
	    http.sessionManagement()
	    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	    .and();
	      
	    http.exceptionHandling()
	    .authenticationEntryPoint((request, response, ex) -> {
	    	response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
	    }).and();
	    
	    http.authorizeRequests()
	    .antMatchers("/usuario/add/**","/api/auth/**").permitAll()
	    .anyRequest().authenticated();
	    
	    http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	    
	    

	    return http.build();
	}
	
}