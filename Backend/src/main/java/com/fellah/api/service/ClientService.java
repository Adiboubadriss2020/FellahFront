package com.fellah.api.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellah.api.model.Client;

public interface ClientService {
	public Client saveClient(Client client);
    public List<Client> getAllClients();
    public Client findkarim();
    public Client update(Long id,Client client);
    public void delete(Long id);
	public Long allClt();
	List<Object> getLastSevenDays(int d);

}

