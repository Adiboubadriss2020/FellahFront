package com.fellah.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fellah.api.model.Account;
@Service
public interface AccountService {
	public Account saveAccount(Account account);
	public List<String> getacc();
}
