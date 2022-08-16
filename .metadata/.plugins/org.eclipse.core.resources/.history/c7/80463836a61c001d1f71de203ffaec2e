package com.fellah.api.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "medicament")
public class Medicament {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom_medicament;
	private Date date_prise;
	private Long prix_medicament;
	@OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "bovin_id",nullable = false)
    private Animal animal;
	public Medicament() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Medicament(int id, String nom_medicament, Date date_prise, Long prix_medicament) {
		super();
		this.id = id;
		this.nom_medicament = nom_medicament;
		this.date_prise = date_prise;
		this.prix_medicament = prix_medicament;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom_medicament() {
		return nom_medicament;
	}
	public void setNom_medicament(String nom_medicament) {
		this.nom_medicament = nom_medicament;
	}
	public Date getDate_prise() {
		return date_prise;
	}
	public void setDate_prise(Date date_prise) {
		this.date_prise = date_prise;
	}
	public Long getPrix_medicament() {
		return prix_medicament;
	}
	public void setPrix_medicament(Long prix_medicament) {
		this.prix_medicament = prix_medicament;
	}
	public Animal getAnimal() {
		return animal;
	}
	public void setAnimal(Animal animal) {
		this.animal = animal;
	}
	
}
