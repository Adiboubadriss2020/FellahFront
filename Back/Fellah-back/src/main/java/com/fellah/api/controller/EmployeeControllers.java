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

import com.fellah.api.model.Employee;
import com.fellah.api.model.Fournisseur;
import com.fellah.api.service.EmployeeService;
import com.fellah.api.service.FournisseurService;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeControllers {

	 	@Autowired
	    private EmployeeService employeeService;

	   
	 	@PostMapping("/add")
	    public String add(@RequestBody Employee employee){
	        employeeService.saveEmp(employee);
	        return "New Employee is added";
	    }

	 	@GetMapping("/allEmp")
	    public Long Allemp(){
	        return employeeService.allEmp();
	    }
	 	
	    @GetMapping("/getAll")
	    public List<Employee> list(){
	        return employeeService.getAllEmp();
	    }
	    @GetMapping("/days/{d}")
	    public List<Object> Seven(@PathVariable(value = "d") int d){
	    	return  employeeService.getLastSevenDays(d);
	    }
	   /* @GetMapping("/getnom")
	    public Fournisseur karim(){
	        return fournisseurService.findkarim();
	    }*/
		// update employee rest api
		
	    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long id,
	                                                         @RequestBody Employee employee){
	        return new ResponseEntity<>(employeeService.update(id, employee), HttpStatus.OK);
	    }
		 
		// delete employee rest api
		@DeleteMapping("/delete/{id}")
		public String deleted(@PathVariable(value = "id") Long id) {
			employeeService.delete(id);
			
			return "Deleted!";
			
		}  
	
	
	
}
