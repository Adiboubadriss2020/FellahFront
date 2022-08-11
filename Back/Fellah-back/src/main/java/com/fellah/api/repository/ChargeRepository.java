package com.fellah.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.json.JSONArray;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.fellah.api.model.Charge;

public interface ChargeRepository extends JpaRepository<Charge,Long> {

	
    @Query(value="select c.date,c.total from Charge c having c.date between ?1 and ?2  order by date ",
    		nativeQuery = true)
    List<Object> three(LocalDate threeDaysAgoDate,LocalDate today);
    
    @Query(value="select c.date,c.total from Charge c having c.date between ?1 and ?2  order by date ",
    		nativeQuery = true)
    List<Object> sevendays(LocalDate sevenDaysAgoDate,LocalDate today);
    
    @Query(value="select c.date,c.total from Charge c having c.date between ?1 and ?2 order by date ",
    		nativeQuery = true)
    List<Object> month(LocalDate month,LocalDate today);
    @Modifying
    @Transactional
	@Query(
			value = "update charge c set c.total = (c.animal+c.client+c.employees+c.fournisseur+c.medicament+c.veterinaire) where c.date is not null", 
			nativeQuery = true)
			void SumCharge();
}

