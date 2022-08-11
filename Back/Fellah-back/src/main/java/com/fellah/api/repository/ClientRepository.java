package com.fellah.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fellah.api.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	@Query(
			value = "SELECT count(*) FROM client", 
			nativeQuery = true)
			Long all();

	 @Query(value="select c.date,sum(c.transaction) from Client c where c.date between ?1 and ?2  group by c.date order by c.date ",
	    		nativeQuery = true)
	List<Object> sevendays(LocalDate sevenDaysAgoDate, LocalDate today);
}
