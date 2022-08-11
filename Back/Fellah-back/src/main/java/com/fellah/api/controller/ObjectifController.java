package com.fellah.api.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.fellah.api.model.Objectif;
import com.fellah.api.service.ObjectifService;

@RestController
@RequestMapping("/objectif")
@CrossOrigin
public class ObjectifController {
	@Autowired
    private ObjectifService objectifService;

   
 	@PostMapping("/add")
    public String add(@RequestBody Objectif objectif){
 		objectifService.saveObjectif(objectif);
        return "New Employee is added";
    }

 	/*@GetMapping("/allClt")
    public Long Allclt(){
        return objectifService.allClt();
    }*/
    @GetMapping("/getAll")
    public List<Objectif> list(){
        return objectifService.getAllObjectifs();
    }
   /* @GetMapping("/getnom")
    public Fournisseur karim(){
        return fournisseurService.findkarim();
    }*/
	// update employee rest api
	
    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Objectif> updateObjectif(@PathVariable(value = "id") Long id,
                                                         @RequestBody Objectif objectif){
        return new ResponseEntity<>(objectifService.update(id, objectif), HttpStatus.OK);
    }
	 
	// delete employee rest api
	@DeleteMapping("/delete/{id}")
	public String deleted(@PathVariable(value = "id") Long id) {
		objectifService.delete(id);
		
		return "Deleted!";
	}
}
