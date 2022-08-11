package com.fellah.api.service;
import java.util.List;

import com.fellah.api.model.Employee;
import com.fellah.api.model.Fournisseur;
public interface EmployeeService {

	public Employee saveEmp(Employee employee);
    public List<Employee> getAllEmp();
    public Employee findkarim();
    public Employee update(Long id,Employee employee);
    public void delete(Long id);
	public Long allEmp();
	List<Object> getLastSevenDays(int d);

}







