package com.fellah.api.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "charge_externe")
public class Charge_externe {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date date_charge;
	private Long montant;
	public Charge_externe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Charge_externe(int id, Date date_charge, Long montant) {
		super();
		this.id = id;
		this.date_charge = date_charge;
		this.montant = montant;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate_charge() {
		return date_charge;
	}
	public void setDate_charge(Date date_charge) {
		this.date_charge = date_charge;
	}
	public Long getMontant() {
		return montant;
	}
	public void setMontant(Long montant) {
		this.montant = montant;
	}
	
}
