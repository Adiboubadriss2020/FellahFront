package com.fellah.api.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellah.api.model.Client;
import com.fellah.api.model.Veterinaire;

public interface VeterinaireService {
	
    public void delete(Long id);
	public Long allClt();
	List<Object> getLastSevenDays(int d);
	Veterinaire saveVeterinaire(Veterinaire veterinaire);
	List<Veterinaire> getAllVeterinaires();
	Veterinaire update(Long id, Veterinaire veterinaire);
	public Veterinaire check(String nom);

}

