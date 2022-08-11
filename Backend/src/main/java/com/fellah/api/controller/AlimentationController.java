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

import com.fellah.api.model.Alimentation;
import com.fellah.api.model.Alimentation_animal;
import com.fellah.api.model.Animal;
import com.fellah.api.repository.AlimentationRepository;
import com.fellah.api.service.AlimentationService;


@RestController
@RequestMapping("/alimentation")
@CrossOrigin
public class AlimentationController {
	 @Autowired
	    private AlimentationService alimentationService;

	    @PostMapping("/add")
	    public String add(@RequestBody Alimentation alimentation){
	    	alimentationService.saveAlimentation(alimentation);
	        return "New alimentation is added";
	    }

    	
    	@PutMapping(value = "/updatequantite/{quantite}/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	    public void updatQuantite(@PathVariable(value = "quantite") Long qnt,@PathVariable(value = "id") Long id)
    	{
        	alimentationService.updatequantity(qnt,id);
	    }
	    @GetMapping("/getAll")
	    public List<Alimentation> list(){
	        return alimentationService.getAllAlimentation();
	    }
	    
	    @SuppressWarnings("null")
		@GetMapping("/check/{identifiant}")
	    public Alimentation checks(@PathVariable(value = "identifiant") Long identifiant){
	    	Alimentation alimentation= new Alimentation();
	    			alimentation= alimentationService.check(identifiant);
	   
	    	if(alimentation==null) {
		 		alimentation.setType_alimentation("momo");
				return alimentation;
			}
	else {
		return alimentation;
	}
	    	

	    }
	    
	    /*@GetMapping("/getnom")
	    public Fournisseur karim(){
	        return fournisseurService.findkarim();
	    }*/
		// update employee rest api
		
	    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Alimentation> updatAlimentation(@PathVariable(value = "id") Long id,
	                                                         @RequestBody Alimentation alimentation){
	        return new ResponseEntity<>(alimentationService.update(id, alimentation), HttpStatus.OK);
	    }
		 
		 
		 
		 
		// delete alimentation rest api
		@DeleteMapping("/delete/{id}")
		public String deleted(@PathVariable(value = "id") Long id) {
			alimentationService.delete(id);
			
			return "Deleted!";
		}
}
