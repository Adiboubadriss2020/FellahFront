package com.fellah.api.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "alimentation_animal")
public class Alimentation_animal {
	@Id
	@Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private Date date_alimentation;
	@Column
	private int quantite;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "bovin_id",nullable = true)
    private Animal animal;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "alimentation_id",nullable = true)
    private Alimentation alimentation;
	
	public Alimentation_animal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Alimentation_animal(Long id, Date date_alimentation, int quantite,Animal animal,Alimentation alimentation) {
		super(); 
		this.id = id;
		this.date_alimentation = date_alimentation;
		this.quantite = quantite;
		this.animal=animal;
		this.alimentation=alimentation;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate_alimentation() {
		return date_alimentation;
	}
	public void setDate_alimentation(Date date_alimentation) {
		this.date_alimentation = date_alimentation;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Animal getAnimal() {
		return animal;
	}
	public void setAnimal(Animal animal) {
		this.animal = animal;
	}
	public Alimentation getAlimentation() {
		return alimentation;
	}
	public void setAlimentation(Alimentation alimentation) {
		this.alimentation = alimentation;
	}
	
}
