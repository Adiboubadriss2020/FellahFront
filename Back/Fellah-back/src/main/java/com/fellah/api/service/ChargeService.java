package com.fellah.api.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.json.JSONArray;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.fellah.api.model.Animal;
import com.fellah.api.model.Charge;
@Service
public interface ChargeService {
	public void SumCharge();
	public List<Object> getLastThreeDays();
	public List<Object> getLastSevenDays();
	public List<Object> getLastMonth();
	public Charge saveCharge(Charge charge);


}
