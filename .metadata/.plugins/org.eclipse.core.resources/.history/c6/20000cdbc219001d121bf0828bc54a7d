package com.fellah.api.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.fellah.api.model.Charge;
import com.fellah.api.repository.ChargeRepository;

@Service
public class ChargeImpService implements ChargeService{
	@Autowired
	private final ChargeRepository chargeRepository;
	 @Autowired
	    public ChargeImpService(ChargeRepository repository) {
	        this.chargeRepository = repository;
	    }

	   public List<Object> getLastThreeDays() {
	        // subtract 3 days from today
		   	LocalDate today=LocalDate.now();
	        LocalDate threeDaysAgoDate = LocalDate.now().minusDays(3);
	        return this.chargeRepository.three(threeDaysAgoDate,today);

	    }
	
	

	@Override
	public List<Object> getLastSevenDays() {
	   	LocalDate today=LocalDate.now();

		 LocalDate sevenDaysAgoDate = LocalDate.now().minusDays(7);
	        return this.chargeRepository.sevendays(sevenDaysAgoDate,today);

	}

	@Override
	public List<Object> getLastMonth() {
	   	LocalDate today=LocalDate.now();

		LocalDate month = LocalDate.now().minusDays(365);
        return this.chargeRepository.sevendays(month,today);
	}

	@Override
	public Charge saveCharge(Charge charge) {
		
		return chargeRepository.save(charge);
	}


	@Override
	public void SumCharge() {
	 chargeRepository.SumCharge();
		
	}
}
