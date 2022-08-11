package com.fellah.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.fellah.api.model.Objectif;
@Service
public interface ObjectifService {
	public Objectif saveObjectif(Objectif objectif);
    public List<Objectif> getAllObjectifs();
    public Objectif findkarim();
    public Objectif update(Long id,Objectif objectif);
    public void delete(Long id);
    public List<Objectif> important( );
}
