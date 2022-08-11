package com.fellah.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.fellah.api.model.Objectif;

public interface ObjectifRepository extends  JpaRepository<Objectif, Long> {

@Query(
			
			value = "SELECT * FROM objectif o WHERE o.important='Important' ", 
			nativeQuery = true)
			List<Objectif> important();
	
}
