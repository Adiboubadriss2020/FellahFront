package com.fellah.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fellah.api.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	@Query(
			value = "SELECT count(*) FROM employee", 
			nativeQuery = true)
			Long all();
	
	 @Query(value="select e.date,sum(e.salaire) from Employee e where e.date between ?1 and ?2  group by e.date order by e.date ",
	    		nativeQuery = true)	    	 
	List<Object> sevendays(LocalDate sevenDaysAgoDate, LocalDate today);
}
