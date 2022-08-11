package com.fellah.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Client;
import com.fellah.api.model.Objectif;
import com.fellah.api.repository.ClientRepository;
import com.fellah.api.repository.ObjectifRepository;
@Service
public class ObjectifImpService implements ObjectifService {
	  
	   @Autowired
	    private ObjectifRepository obj;
	@Override
	public Objectif saveObjectif(Objectif objectif) {
		
		return obj.save(objectif);
	}

	@Override
	public List<Objectif> getAllObjectifs() {
		
		return obj.findAll();
	}

	@Override
	public Objectif findkarim() {
		
		return null;
	}

	@Override
	public Objectif update(Long id, Objectif objectif) {
		
		 if (obj.findById(id).isPresent()){
	            Objectif o = obj.findById(id).get();

	            o.setDescription(objectif.getDescription());
	            o.setDuree(objectif.getDuree());         
	            Objectif ob= obj.save(objectif);

	            return ob;
	        }else{
	            return null;
	        }
	}

	@Override
	public void delete(Long id) {
		obj.deleteById(id);
		
	}

	@Override
	public List<Objectif> important() {
		
		return obj.findAll();
	}

}
