package com.fellah.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Veterinaire;

public interface VeterinaireRepository extends JpaRepository<Veterinaire, Long> {
	 @Query(value="select v.date,sum(v.transaction) from Veterinaire v where v.date between ?1 and ?2  group by v.date order by v.date ",
	    		nativeQuery = true)
	    List<Object> sevendays(LocalDate threeDaysAgoDate,LocalDate today);
	 @Query(
				value = "SELECT * FROM veterinaire v where v.nom= ?1", 
				nativeQuery = true)
	 			Veterinaire check(String nom);
	    	 
}
