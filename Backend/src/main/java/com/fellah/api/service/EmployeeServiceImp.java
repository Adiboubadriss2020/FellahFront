package com.fellah.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fellah.api.model.Employee;
import com.fellah.api.model.Fournisseur;
import com.fellah.api.repository.EmployeeRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImp implements EmployeeService {

	
	

    @Autowired
    private EmployeeRepository emp;
	@Override
	public Employee saveEmp(Employee employee) {
		return emp.save(employee);
	}

	@Override
	public List<Employee> getAllEmp() {
		
		return emp.findAll();
	}
	@Override
	public List<Object> getLastSevenDays(int d) {
	   	LocalDate today=LocalDate.now();

		 LocalDate sevenDaysAgoDate = LocalDate.now().minusDays(d);
	        return this.emp.sevendays(sevenDaysAgoDate,today);

	}
	@Override
	public Employee findkarim() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Employee update(Long id,Employee em) {
		

        if (emp.findById(id).isPresent()){
            Employee employee = emp.findById(id).get();

            employee.setNom(em.getNom());
            employee.setPrenom(em.getPrenom());
            employee.setAdresse(em.getAdresse());
            employee.setAge(em.getAge());
            employee.setSalaire(em.getSalaire());
            

            Employee updatedEmp = emp.save(employee);

            return updatedEmp;
        }else{
            return null;
        }
	}

	@Override
	public void delete(Long id) {
			emp.deleteById(id);
	}

	@Override
	public Long allEmp() {
		return emp.all();

	}



	

}
