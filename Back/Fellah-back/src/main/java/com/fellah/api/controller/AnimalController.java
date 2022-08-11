package com.fellah.api.controller;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fellah.api.model.Animal;
import com.fellah.api.repository.AnimalRepository;
import com.fellah.api.service.AnimalService;

@RestController
@RequestMapping("/animal")
@CrossOrigin
public class AnimalController {

	    @Autowired
	    private AnimalService animalService;
	    private AnimalRepository animalRepository;

	    @PostMapping("/add")
	    public String add(@RequestBody Animal animal){
	    	animalService.updatestat3();
	    	animalService.updatestat2();
	    	
	    	animalService.saveAnimal(animal);
	        return "New animal is added";
	    }
	    
	    @SuppressWarnings("null")
		@GetMapping("/check/{identifiant}")
	    public Animal checks(@PathVariable(value = "identifiant") Long identifiant) throws NullPointerException{
	    	Animal a = new Animal();
	    			a=animalService.check(identifiant);
	    	if(a==null) {
	    		 		a.setEtat("null");
						return a;
	    			}
	    	else {
	    		return a;
	    	}

	    }
	    @GetMapping("/allAn")
	    public Long Allan(){
	        return animalService.allAn();
	    }
	    @GetMapping("/etat")
	    public List<Animal> malade(){
	    	animalService.updatestat3();
	    	animalService.updatestat2();
	    	

	        return animalService.etat();
	    }

	    @GetMapping("/getAll")
	    public List<Animal> list(){
	    	animalService.updatestat3();

	    	animalService.updatestat2();


	        return animalService.getAllAnimals();
	    }
	    @GetMapping("/days")
	    public Animal DAYS(){
	        return animalService.days();
	    }
	  
		
	    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Animal> updatAnimal(@PathVariable(value = "id") Long id,
	                                                         @RequestBody Animal animal)
	    {animalService.updatestat3();
	    	animalService.updatestat2();
	    	
	        return new ResponseEntity<>(animalService.update(id, animal), HttpStatus.OK);
	    }
	    
	    @PutMapping("/updateinfos/{id}")
	    public String updateInf(@PathVariable(value = "id") Long id){
	    	animalService.updateinfos(id);

	        return "Updated!";
	    }
		// delete employee rest api
		@DeleteMapping("/delete/{id}")
		public String deleted(@PathVariable(value = "id") Long id) {
			animalService.delete(id);
			
			return "Deleted!";
			
		}
	
	
	
}
