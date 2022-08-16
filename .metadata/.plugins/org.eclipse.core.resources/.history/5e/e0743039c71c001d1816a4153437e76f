package com.fellah.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Animal;
import com.fellah.api.model.Charge;
import com.fellah.api.model.Client;
import com.fellah.api.model.Employee;
import com.fellah.api.model.Fournisseur;
import com.fellah.api.model.Veterinaire;
import com.fellah.api.model.Visite;

public interface ChargeRepository extends JpaRepository<Charge, Long>{
	@Modifying
    @Transactional
	 @Query(value="insert into charge (`id`, `date_charge`, `alimentation_id`, `bovin_id`, `client_id`, `employee_id`, `fournisseur_id`, `veterinaire_id`, `visite_id`) "
	 		+ "VALUES (NULL, ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);",
	    		nativeQuery = true)
	    void savecharge(LocalDate today,Alimentation alimentation,Animal animal,Client client,Employee employee,Fournisseur fournisseur,Veterinaire veterinaire,Visite visite);
	@Query(
			value = "SELECT ch.date_charge,(f.transaction,e.salaire,al.prix_arrivage,a.prix_achat,vi.prix_visite,v.transaction,c.transaction"
					+ " FROM charge ch,fournisseur f,employee e,client c,alimentation al,animal a,veterinaire v, visite vi where"
					+ "ch.fournisseur_id=f.id or ch.employee_id=e.id or ch.client_id = c.id or ch.animal_id=a.id or ch.alimentation_id=al.id"
					+ " or sch.visite_id=vi.id or ch.veterinaire_id=v.id and ch.date_charge between ?1 and ?2  group by ch.date_charge order by ch.date_charge  ", 
			nativeQuery = true)
			List<Object> getfilter(LocalDate threeDaysAgoDate,LocalDate today);
}
