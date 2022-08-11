package com.fellah.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellah.api.model.Activite;

public interface ActiviteRepository extends JpaRepository<Activite, Integer> {

}
