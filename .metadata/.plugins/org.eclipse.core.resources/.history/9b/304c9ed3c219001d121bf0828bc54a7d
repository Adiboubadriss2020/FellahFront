package com.fellah.api.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "charge")
public class Charge {
	@Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    @Column(name = "fournisseur")
	private long fournisseur;
    @Column(name = "employees")
	private long employees;
    @Column(name = "client")
	private long client;
    @Column(name = "veterinaire")
	private long veterinaire;
    @Column(name = "medicament")
	private long medicament;
    @Column(name = "animal")
	private long animal;
    @Column(name = "total")
	private long total;
    @Column(name = "date")
	private Date date;
	public Charge() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Charge(Long id, long fournisseur, long employees, long client, long veterinaire, long medicament,
			long animal, long total, Date date) {
		super();
		this.id = id;
		this.fournisseur = fournisseur;
		this.employees = employees;
		this.client = client;
		this.veterinaire = veterinaire;
		this.medicament = medicament;
		this.animal = animal;
		this.total = total;
		this.date = date;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getFournisseur() {
		return fournisseur;
	}
	public void setFournisseur(long fournisseur) {
		this.fournisseur = fournisseur;
	}
	public long getEmployees() {
		return employees;
	}
	public void setEmployees(long employees) {
		this.employees = employees;
	}
	public long getClient() {
		return client;
	}
	public void setClient(long client) {
		this.client = client;
	}
	public long getVeterinaire() {
		return veterinaire;
	}
	public void setVeterinaire(long veterinaire) {
		this.veterinaire = veterinaire;
	}
	public long getMedicament() {
		return medicament;
	}
	public void setMedicament(long medicament) {
		this.medicament = medicament;
	}
	public long getAnimal() {
		return animal;
	}
	public void setAnimal(long animal) {
		this.animal = animal;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	
	
	
	
}
