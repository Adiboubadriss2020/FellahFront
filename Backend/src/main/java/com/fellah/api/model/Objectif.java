package com.fellah.api.model;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "ojectif")
public class Objectif {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
    private Long id;
	private String description;
	private Date duree;
//	private String important;
	@SuppressWarnings("unlikely-arg-type")
	public Objectif(Long id, String description, Date duree) {
		super();
			this.id = id;
			this.description = description;
			this.duree = duree;
			//this.important=important;
			
	}
	public Objectif() {
		super();
		
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDuree() {
		return duree;
	}
	public void setDuree(Date duree) {
		this.duree = duree;
	}
//	public String getImportant() {
	//	return important;
	//}
	//public void setImportant(String important) {
	//	this.important = important;
	//}
	
	
}
