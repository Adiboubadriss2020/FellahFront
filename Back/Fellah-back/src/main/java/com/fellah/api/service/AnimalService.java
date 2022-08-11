package com.fellah.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fellah.api.model.Animal;
import com.fellah.api.model.Fournisseur;

@Service
public interface AnimalService {
	public Animal saveAnimal(Animal animal);
	public List<Animal> getAllAnimals();
    public Animal findkarim();
    public Animal update(Long id, Animal a);
    public void delete(Long id);
	public Long allAn();
	public List<Animal> etat();
	void updatestat2();
	void updatestat3();
	public Animal updatestat(Long id, Animal a);
	public void updateinfos(Long id);
	public Animal days();
	public Animal check(Long ref);

}
