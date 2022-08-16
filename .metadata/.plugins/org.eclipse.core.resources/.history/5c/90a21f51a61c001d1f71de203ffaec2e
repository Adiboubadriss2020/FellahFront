package com.fellah.api.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "veterinaire")
public class Veterinaire {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique=true)
	private String nom;
	private int telephone;
	private long transaction;
	private Date date;
	
	public Veterinaire() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Veterinaire(Long id, String nom, int telephone) {
		super();
		this.id = id;
		this.nom = nom;
		this.telephone = telephone;
	}
	public Long  getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public int getTelephone() {
		return telephone;
	}
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
	
	public long getTransaction() {
		return transaction;
	}
	public void setTransaction(long transaction) {
		this.transaction = transaction;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	
}
