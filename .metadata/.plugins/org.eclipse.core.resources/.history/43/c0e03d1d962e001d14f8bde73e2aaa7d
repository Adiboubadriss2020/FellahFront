package com.fellah.api.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Visite;

import com.fellah.api.repository.VisiteRepository;
@Service
public class VisiteImpService implements VisiteService {

  	@Autowired
    private VisiteRepository v;
  	@Transactional
	public Visite saveVisite(Visite visite) {
		
		return v.save(visite);
	}

	@Override
	public List<Visite> getAllVisite() {
		
		return v.findAll();
	}

	@Override
	public Visite findkarim() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Visite update(Long id, Visite a) {
		if (v.findById(id).isPresent()){
			Visite visite = v.findById(id).get();

			visite.setDate_visite(a.getDate_visite());
			visite.setAnimal(a.getAnimal());
			visite.setVeterinaire(a.getVeterinaire());


			Visite updatedV = v.save(visite);

            return updatedV;
        }else{
            return null;
        }
	}

	@Override
	public void delete(Long id) {
		v.deleteById(id);
		
	}

	@Override
	public void updatequantity(String type, Long id, String quantite_animal) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Object> getLastSevenDays(int d) {
	   	LocalDate today=LocalDate.now();

		 LocalDate sevenDaysAgoDate = LocalDate.now().minusDays(d);
	        return this.v.sevendays(sevenDaysAgoDate,today);

	}
}
