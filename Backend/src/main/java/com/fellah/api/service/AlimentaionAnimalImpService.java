package com.fellah.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Alimentation_animal;
import com.fellah.api.model.Animal;
import com.fellah.api.repository.AlimentationRepository;
import com.fellah.api.repository.Alimentation_animalRepository;
@Service
public class AlimentaionAnimalImpService implements AlimentationAnimalService {

  	@Autowired
    private Alimentation_animalRepository al;
  	@Transactional
	public Alimentation_animal saveAlimentation(Alimentation_animal alimentation) {
		
		return al.save(alimentation);
	}

	@Override
	public List<Alimentation_animal> getAllAlimentationanimal() {
		
		return al.findAll();
	}

	@Override
	public Alimentation_animal findkarim() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Alimentation_animal update(Long id, Alimentation_animal a) {
		if (al.findById(id).isPresent()){
			Alimentation_animal alimentation = al.findById(id).get();

           /* alimentation.setDate_arrivage(a.getDate_arrivage());
            alimentation.setQuantite_arrivage(a.getQuantite_arrivage());
            alimentation.setPrix_arrivage(a.getPrix_arrivage());
            alimentation.setType_alimentation(a.getType_alimentation());*/


            Alimentation_animal updatedAl = al.save(alimentation);

            return updatedAl;
        }else{
            return null;
        }
	}

	@Override
	public void delete(Long id) {
		al.deleteById(id);
		
	}

	@Override
	public void updatequantity(String type, Long id, String quantite_animal) {
		/*al.updatequantity(type, id, quantite_animal);*/
		
	}

}
