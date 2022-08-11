package com.fellah.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Alimentation_animal;
import com.fellah.api.model.Visite;
import com.fellah.api.repository.AlimentationRepository;
import com.fellah.api.repository.Alimentation_animalRepository;
import com.fellah.api.service.AlimentationAnimalService;
import com.fellah.api.service.AlimentationService;
import com.fellah.api.service.VisiteService;
@RestController
@RequestMapping("/visite")
@CrossOrigin
public class VisiteController {
	 @Autowired
	    private VisiteService VisiteService;
	    private Alimentation_animalRepository alimentationRepository;

	    @PostMapping("/add")
	    public String add(@RequestBody Visite visite){
	    	VisiteService.saveVisite(visite);
	        return "New visite is added";
	    }

	    @GetMapping("/getAll")
	    public List<Visite> list(){
	        return VisiteService.getAllVisite();
	    }

	    @DeleteMapping("/delete/{id}")
		public String deleted(@PathVariable(value = "id") Long id) {
	    	VisiteService.delete(id);
			
			return "Deleted!";
		}
}
 