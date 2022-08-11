package com.fellah.api.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fellah.api.model.Account;

public interface AccounRepository extends JpaRepository<Account, Long>{
	@Query(value ="select name from Account ")
    List<String> getA();
	
}
