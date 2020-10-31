package com.wdagency.atipykhouse.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wdagency.atipykhouse.model.Hebergement;
import com.wdagency.atipykhouse.service.HebergementService;
@CrossOrigin
@RestController()
public class HebergementController {

	@Autowired
	HebergementService hebService;
	
	@GetMapping(value="/homes")
	public List<Hebergement> getHebergements() {
		return hebService.findAll();
	}
	
	@GetMapping(value="/home/{id}")
	public Hebergement getHebergement(String id) {
		return hebService.findOne(id);
	}
	
//	@DeleteMapping
//	public 
}
