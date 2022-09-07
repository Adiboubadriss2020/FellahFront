package com.fellah.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Alimentation;
import com.fellah.api.repository.AlimentationRepository;
@Service
public class AlimentaionImpService implements AlimentationService {

  	@Autowired
    private AlimentationRepository al;
	@Override
	public Alimentation saveAlimentation(Alimentation alimentation) {
		
		return al.save(alimentation);
	}

	@Override
	public List<Alimentation> getAllAlimentation() {
		
		return al.findAll();
	}

	@Override
	public Alimentation findkarim(Long id) {
		
		return al.findkarim(id);
	}

	@Override
	public Alimentation update(Long id, Alimentation a) {
		if (al.findById(id).isPresent()){
            Alimentation alimentation = al.findById(id).get();
            if(a.getQuantite_arrivage()==0||a.getType_alimentation()=="") {
            	return alimentation;
            }
            alimentation.setDate_arrivage(a.getDate_arrivage());
            alimentation.setQuantite_arrivage(a.getQuantite_arrivage());
            alimentation.setType_alimentation(a.getType_alimentation());
            alimentation.setRef(a.getRef());

            Alimentation updatedAl = al.save(alimentation);

            return updatedAl;
        }else{
            return null;
        }
	}

	@Override
	public void delete(Long id) {
		al.deleteById(id);
		
	}

	@Override
	public Alimentation check(Long ref) {
		
		return al.check(ref);
	}

	@Override
	public void updatequantity(double qnt,Long id) {
		
		al.updatequantity(qnt, id);
	}

	@Override
	public List<Object> getLastSevenDays(int d) {
	   	LocalDate today=LocalDate.now();

		 LocalDate sevenDaysAgoDate = LocalDate.now().minusDays(d);
	        return this.al.sevendays(sevenDaysAgoDate,today);

	}

	

}
