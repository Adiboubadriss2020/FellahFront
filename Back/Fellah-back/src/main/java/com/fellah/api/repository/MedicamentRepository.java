package com.fellah.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellah.api.model.Medicament;

public interface MedicamentRepository extends JpaRepository<Medicament, Integer> {

}
