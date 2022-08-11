package com.fellah.api.service;
import java.util.List;
import java.util.Optional;

import com.fellah.api.model.Employee;
import com.fellah.api.model.Fournisseur;
public interface FournisseurService {
	 public Fournisseur saveFournisseur(Fournisseur fournisseur);
	    public List<Fournisseur> getAllFournisseurs();
	    public Fournisseur findkarim();
	    public Fournisseur update(Long id);
	    public void delete(Long id);
		public Fournisseur updateFr(Long id, Fournisseur f);
		public Long allF();
		
		List<Object> getLastSevenDays(int d);

}







