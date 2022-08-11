package com.fellah.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Activite {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String type_activite;
	public Activite() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Activite(int id, String type_activite) {
		super();
		this.id = id;
		this.type_activite = type_activite;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType_activite() {
		return type_activite;
	}
	public void setType_activite(String type_activite) {
		this.type_activite = type_activite;
	}
	
}
