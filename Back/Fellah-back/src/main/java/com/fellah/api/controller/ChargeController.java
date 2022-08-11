package com.fellah.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fellah.api.model.Charge;
import com.fellah.api.service.ChargeService;


@RestController
@RequestMapping("/charge")
@CrossOrigin
public class ChargeController {
	 @Autowired
	 private ChargeService chargeService;

	    @GetMapping("/threedays")
	    public List<Object> Three(){
	    	chargeService.SumCharge();
	    	return  chargeService.getLastThreeDays();
	    }
	    @GetMapping("/sevendays")
	    public List<Object> Seven(){
	    	chargeService.SumCharge();

	    	return  chargeService.getLastSevenDays();
	    }
	    @GetMapping("/month")
	    public List<Object> Month(){
	    	chargeService.SumCharge();

	    	return  chargeService.getLastMonth();
	    }
	    @PutMapping(value = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
	    public String Sumtotal(){    
	        		chargeService.SumCharge();
	        		  return "updated!";
    }
}
