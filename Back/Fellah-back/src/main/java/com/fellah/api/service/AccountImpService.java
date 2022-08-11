package com.fellah.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Account;
import com.fellah.api.repository.AccounRepository;
@Service
public class AccountImpService implements AccountService {
	@Autowired
    private AccounRepository a;
	@Override
	public Account saveAccount(Account account) {
		// TODO Auto-generated method stub
		return a.save(account);
	}

	@Override
	public List<String> getacc() {
		
		return a.getA();
	}

}
