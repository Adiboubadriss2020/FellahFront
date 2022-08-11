package com.fellah.api.service;


import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Alimentation_animal;

@Service
public interface AlimentationAnimalService  {
	public Alimentation_animal saveAlimentation(Alimentation_animal alimentation);
	public List<Alimentation_animal> getAllAlimentationanimal();
    public Alimentation_animal findkarim();
    public Alimentation_animal update(Long id, Alimentation_animal a);
    public void delete(Long id);
    public void updatequantity(String type,Long id,String quantite_animal);
    
}
