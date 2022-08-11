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
import com.fellah.api.model.Client;
import com.fellah.api.model.Veterinaire;
import com.fellah.api.service.ClientService;
import com.fellah.api.service.VeterinaireService;

@RestController
@RequestMapping("/veterinaire")
@CrossOrigin
public class VeterinaireController {

	
	@Autowired
    private 	VeterinaireService veterinaireService;

   
 	@PostMapping("/add")
    public String add(@RequestBody Veterinaire veterinaire){
 		veterinaireService.saveVeterinaire(veterinaire);
        return "New Veterinaire is added";
    }

 	@GetMapping("/allClt")
    public Long Allclt(){
        return veterinaireService.allClt();
    }
    @GetMapping("/getAll")
    public List<Veterinaire> list(){
        return veterinaireService.getAllVeterinaires();
    }
    
    @SuppressWarnings("null")
	@GetMapping("/check/{nom}")
    public Veterinaire checks(@PathVariable(value = "nom") String nom){
    	Veterinaire veterinaire= new Veterinaire();
    	veterinaire= veterinaireService.check(nom);
   
    	if(veterinaire==null) {
    		veterinaire.setTelephone(0);
			return veterinaire;
		}
else {
	return veterinaire;
}
    	

    }
    
    @GetMapping("/days/{d}")
    public List<Object> Seven(@PathVariable(value = "d") int d){
    	return  veterinaireService.getLastSevenDays(d);
    }
    
   /* @GetMapping("/getnom")
    public Fournisseur karim(){
        return fournisseurService.findkarim();
    }*/
	// update employee rest api
	
    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Veterinaire> updateVeterinaire(@PathVariable(value = "id") Long id,
                                                         @RequestBody Veterinaire veterinaire){
        return new ResponseEntity<>(veterinaireService.update(id, veterinaire), HttpStatus.OK);
    }
	 
	// delete employee rest api
	@DeleteMapping("/delete/{id}")
	public String deleted(@PathVariable(value = "id") Long id) {
		veterinaireService.delete(id);
		
		return "Deleted!";
	}
}
