package com.fellah.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.fellah.api.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long>{
	
	@Query(
			value = "SELECT count(*) FROM animal", 
			nativeQuery = true)
			Long all();
	@Query(
			value = "SELECT * FROM animal a where a.ref= ?1", 
			nativeQuery = true)
			Animal check(Long ref);
	@Query(
			value = "SELECT id,date_achat FROM animal", 
			nativeQuery = true)
	Animal days();
	@Query(
			value = "SELECT * FROM animal WHERE etat = 'Malade'", 
			nativeQuery = true)
			List<Animal> getetat();
	@Modifying
    @Transactional
	@Query(
			
			value = "UPDATE animal a SET a.etat = :etat WHERE a.id= :id ", 
			nativeQuery = true)
			void updatestat(@Param("etat") String etat,@Param("id")Long id);
	
	
	@Modifying
	@Transactional
	@Query(
			
			value = "UPDATE animal a SET a.etat = 'Bien' WHERE a.infos IS NULL OR a.infos ='' ", 
			nativeQuery = true)
			void updatestat2();

	@Modifying
	@Transactional
	@Query(
			
			value = "UPDATE animal a SET a.etat = 'Malade' WHERE a.infos IS NOT NULL ", 
			nativeQuery = true)
			void updatestat3();
	@Modifying
	@Transactional
	@Query(
			
			value = "UPDATE animal a SET a.infos = '' WHERE a.id= :id", 
			nativeQuery = true)
			void updateinfos(@Param("id")Long id);
}


