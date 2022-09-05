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
@Table(name = "charge")
public class Charge {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	
	private Long id;
	private Date date_charge;
	private Long prix;
	/*@ManyToOne
    @JoinColumn(name = "bovin_id",nullable = true)
    private Animal animal;*/
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fournisseur",nullable = true)
    private Fournisseur fournisseur;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "employee",nullable = true)
    private Employee employee;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "client",nullable = true)
    private Client client;
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "veterinaire",nullable = true)
    private Veterinaire veterinaire;
	/*@ManyToOne
    @JoinColumn(name = "visite_id",nullable = true)
    private Visite visite;*/
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "alimentation",nullable = true)
    private Alimentation alimentation;
	public Charge() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Charge(Long id, Date date_charge,Long prix,Fournisseur fournisseur) {
		super();
		this.id = id;
		this.date_charge = date_charge;
		this.prix=prix;
		this.fournisseur=fournisseur;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate_charge() {
		return date_charge;
	}
	public void setDate_charge(Date date_charge) {
		this.date_charge = date_charge;
	}
	/*public Animal getAnimal() {
		return animal;
	}
	public void setAnimal(Animal animal) {
		this.animal = animal;
	}*/
	public Fournisseur getFournisseur() {
		return fournisseur;
	}
	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public Veterinaire getVeterinaire() {
		return veterinaire;
	}
	public void setVeterinaire(Veterinaire veterinaire) {
		this.veterinaire = veterinaire;
	}
	/*public Visite getVisite() {
		return visite;
	}
	public void setVisite(Visite visite) {
		this.visite = visite;
	}*/
	public Alimentation getAlimentation() {
		return alimentation;
	}
	public void setAlimentation(Alimentation alimentation) {
		this.alimentation = alimentation;
	}
	public Long getPrix() {
		return prix;
	}
	public void setPrix(Long prix) {
		this.prix = prix;
	}
	
}
