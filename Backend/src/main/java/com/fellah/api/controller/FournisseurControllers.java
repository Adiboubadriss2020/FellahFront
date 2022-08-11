package com.fellah.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fellah.api.model.Fournisseur;
import com.fellah.api.repository.FournisseurRepository;
import com.fellah.api.service.FournisseurService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fournisseur")
@CrossOrigin
public class FournisseurControllers {
	
	
	    @Autowired
	    private FournisseurService fournisseurService;
	    private FournisseurRepository fournisseurRepository;

	    @PostMapping("/add")
	    public String add(@RequestBody Fournisseur fournisseur){
	        fournisseurService.saveFournisseur(fournisseur);
	        return "New fournisseur is added";
	    }
	    @GetMapping("/days/{d}")
	    public List<Object> Seven(@PathVariable(value = "d") int d){
	    	return  fournisseurService.getLastSevenDays(d);
	    }
	    
	    
	    @GetMapping("/allF")
	    public Long AllF(){
	        return fournisseurService.allF();
	    }
	    
	    @GetMapping("/getAll")
	    public List<Fournisseur> list(){
	        return fournisseurService.getAllFournisseurs();
	    }
	    @GetMapping("/getnom")
	    public Fournisseur karim(){
	        return fournisseurService.findkarim();
	    }
		// update employee rest api
		
	    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Fournisseur> updatFournisseur(@PathVariable(value = "id") Long id,
	                                                         @RequestBody Fournisseur fournisseur){
	        return new ResponseEntity<>(fournisseurService.updateFr(id, fournisseur), HttpStatus.OK);
	    }
		 
		 
		 
		 
		// delete employee rest api
		@DeleteMapping("/delete/{id}")
		public String deleted(@PathVariable(value = "id") Long id) {
			fournisseurService.delete(id);
			
			return "Deleted!";
			
		}
	}
	

