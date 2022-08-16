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
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "animal")
public class Animal {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(unique=true)
	private Long ref;
	@Column(name = "origine")
	private String origine;
	@Column(name = "prix_achat")
	private Long prix_achat;
	@Column(name = "poid_achat")
	private Long poid_achat;
	@Column(name = "date_achat")
	private Date date_achat;
	@Column(name = "poid_vente")
	private Long poid_vente;
	@Column(name = "date_vente")
	private Date date_vente;
	@Column(name = "etat")
	private String etat;
	@Column(name = "infos")
	private String infos;

	public Animal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Animal(Long id,Long ref, String origine, Long prix_achat, Long poid_achat, Date date_achat, Long poid_vente,
			Date date_vente,String etat,String infos) {
		super();
		this.origine = origine;
		this.prix_achat = prix_achat;
		this.poid_achat = poid_achat;
		this.date_achat = date_achat;
		this.poid_vente = poid_vente;
		this.date_vente = date_vente;
		this.etat = etat;
		this.id = id;
		this.infos=infos;
		this.ref=ref;
	}
	
	public String getOrigine() {
		return origine;
	}
	public void setOrigine(String origine) {
		this.origine = origine;
	}
	public Long getPrix_achat() {
		return prix_achat;
	}
	public void setPrix_achat(Long prix_achat) {
		this.prix_achat = prix_achat;
	}
	public Long getPoid_achat() {
		return poid_achat;
	}
	public void setPoid_achat(Long poid_achat) {
		this.poid_achat = poid_achat;
	}
	public Date getDate_achat() {
		return date_achat;
	}
	public void setDate_achat(Date date_achat) {
		this.date_achat = date_achat;
	}
	public Long getPoid_vente() {
		return poid_vente;
	}
	public void setPoid_vente(Long poid_vente) {
		this.poid_vente = poid_vente;
	}
	public Date getDate_vente() {
		return date_vente;
	}
	public void setDate_vente(Date date_vente) {
		this.date_vente = date_vente;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	
	
	public String getInfos() {
		return infos;
	}
	public void setInfos(String infos) {
		this.infos = infos;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getRef() {
		return ref;
	}
	public void setRef(Long ref) {
		this.ref = ref;
	}
	
	

}
