package com.fellah.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Client;
import com.fellah.api.model.Employee;
import com.fellah.api.model.Veterinaire;
import com.fellah.api.repository.ClientRepository;
import com.fellah.api.repository.FournisseurRepository;
import com.fellah.api.repository.VeterinaireRepository;
@Service
public class VeterinaireImpService implements VeterinaireService {

	 @Autowired
	    private VeterinaireRepository vr;
	@Override
	public Veterinaire saveVeterinaire(Veterinaire veterinaire) {
		
		return vr.save(veterinaire);
	}

	@Override
	public List<Veterinaire> getAllVeterinaires() {
		return vr.findAll();
	}

	@Override
	public List<Object> getLastSevenDays(int d) {
	   	LocalDate today=LocalDate.now();

		 LocalDate sevenDaysAgoDate = LocalDate.now().minusDays(d);
	        return this.vr.sevendays(sevenDaysAgoDate,today);

	}

	@Override
	public Veterinaire update(Long id, Veterinaire veterinaire) {
		 if (vr.findById(id).isPresent()){
	            Veterinaire v = vr.findById(id).get();

	            v.setNom(veterinaire.getNom());
	            v.setTelephone(veterinaire.getTelephone());
	            v.setTransaction(veterinaire.getTransaction());
	            v.setDate(veterinaire.getDate());
	            Veterinaire vet= vr.save(veterinaire);

	            return vet;
	        }else{
	            return null;
	        }
	}

	@Override
	public void delete(Long id) {
			vr.deleteById(id);
	}

	@Override
	public Long allClt() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Veterinaire check(String nom) {
		return vr.check(nom);

	}

	
}
