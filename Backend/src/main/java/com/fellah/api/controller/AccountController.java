package com.fellah.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fellah.api.model.Account;
import com.fellah.api.service.AccountService;

@RestController
@RequestMapping("/account")
@CrossOrigin
public class AccountController {
	 @Autowired
	 private AccountService accountService;
	 @GetMapping("/result")
	    public List<String> Three(){
	    	
	    	return  accountService.getacc();
	 }
}
