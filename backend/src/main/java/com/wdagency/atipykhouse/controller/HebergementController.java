package com.wdagency.atipykhouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wdagency.atipykhouse.model.Hebergement;
import com.wdagency.atipykhouse.repository.HebergementRepository;
import com.wdagency.atipykhouse.service.HerbergementService;
@CrossOrigin
@RestController()
public class HebergementController {

	@Autowired
	HerbergementService hebRepo;
	
	@GetMapping(value="/homes")
	public List<Hebergement> getHebergements() {
		return hebRepo.findAll();
	}
	
	@GetMapping(value="/home/{id}")
	public Hebergement getHebergement(String id) {
		return hebRepo.findOne(id);
	}
	
//	@DeleteMapping
//	public 
}
