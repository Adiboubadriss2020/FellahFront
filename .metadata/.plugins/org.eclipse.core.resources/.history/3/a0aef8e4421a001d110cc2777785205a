package com.fellah.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.fellah.api.model.Alimentation;

public interface AlimentationRepository extends JpaRepository<Alimentation, Long> {
	@Modifying
    @Transactional
	@Query(
			
			value = "UPDATE alimentation a SET a.quantite_arrivage = a.quantite_arrivage - ?1 WHERE a.id = ?2 ", 
			nativeQuery = true)
			void updatequantity(Long qnt,Long id);
	@Query(
			value = "SELECT * FROM alimentation al where al.ref= ?1", 
			nativeQuery = true)
			Alimentation check(Long ref);

}