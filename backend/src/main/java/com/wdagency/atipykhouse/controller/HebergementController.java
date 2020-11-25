package com.wdagency.atipykhouse.controller;

import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wdagency.atipykhouse.model.Hebergement;
import com.wdagency.atipykhouse.service.HebergementService;
@CrossOrigin
@RestController(value="homes")
public class HebergementController {

	@Autowired
	HebergementService hebService;
	
	@GetMapping
	public List<Hebergement> getHebergements() {
		return hebService.findAll();
	}
	
	@GetMapping(value="home={id}")
	public Hebergement getHebergement(String id) {
		return hebService.findOne(id);
	}
	
	@PostMapping(value="create")
	public void createHebergement(Hebergement hebergement) {
		try {
			hebService.newHb(hebergement);
		} catch (HibernateException e) {
			e.getMessage();
		}
	}
	
	@PostMapping(value="update")
	public void updateHebergement(Hebergement hebergement) {
		try {
			Hebergement hbToUpdate = hebService.findOne(hebergement.getId());
			hbToUpdate.setType(hebergement.getType());	
			hebService.pacthOne(hbToUpdate);
		} catch (HibernateException e) {
			e.getMessage();
			
		}
	}
}
