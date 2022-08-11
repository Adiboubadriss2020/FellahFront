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

import com.fellah.api.model.Client;
import com.fellah.api.service.ClientService;

@RestController
@RequestMapping("/client")
@CrossOrigin
public class ClientController {

	
	@Autowired
    private ClientService clientService;

   
 	@PostMapping("/add")
    public String add(@RequestBody Client client){
        clientService.saveClient(client);
        return "New Employee is added";
    }

 	@GetMapping("/allClt")
    public Long Allclt(){
        return clientService.allClt();
    }
    @GetMapping("/getAll")
    public List<Client> list(){
        return clientService.getAllClients();
    }
    @GetMapping("/days/{d}")
    public List<Object> Seven(@PathVariable(value = "d") int d){
    	return  clientService.getLastSevenDays(d);
    }
    
   /* @GetMapping("/getnom")
    public Fournisseur karim(){
        return fournisseurService.findkarim();
    }*/
	// update employee rest api
	
    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Client> updateClient(@PathVariable(value = "id") Long id,
                                                         @RequestBody Client client){
        return new ResponseEntity<>(clientService.update(id, client), HttpStatus.OK);
    }
	 
	// delete employee rest api
	@DeleteMapping("/delete/{id}")
	public String deleted(@PathVariable(value = "id") Long id) {
		clientService.delete(id);
		
		return "Deleted!";
	}
}
