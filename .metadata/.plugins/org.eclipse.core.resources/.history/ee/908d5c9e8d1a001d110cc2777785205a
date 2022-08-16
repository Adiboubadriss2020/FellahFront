package com.fellah.api.repository;

import com.fellah.api.model.Fournisseur;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur,Long> {
	
	 @Query(value="select f.date,sum(f.transaction) from Fournisseur f where f.date between ?1 and ?2  group by f.date order by f.date ",
	    		nativeQuery = true)
	    List<Object> sevendays(LocalDate threeDaysAgoDate,LocalDate today);
	    	 
	 
	@Query(
	value = "SELECT f.date,c.date,(f.transaction+c.salaire) FROM fournisseur f, client c "
			+ "where f.date and c.date between ?1 and ?2", 
	nativeQuery = true)
	Fournisseur findkarim();
	
	@Query(
			value = "SELECT count(*) FROM fournisseur", 
			nativeQuery = true)
			Long all();



	




}
