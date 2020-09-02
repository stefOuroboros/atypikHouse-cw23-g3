package com.wdagency.atipykhouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wdagency.atipykhouse.model.Hebergement;
import com.wdagency.atipykhouse.repository.HebergementRepository;

@CrossOrigin
@RestController()
@RequestMapping("/main")
public class HebergementController {

	@Autowired
	HebergementRepository hebRepo;
	
	@GetMapping(value="/test")
	public String hello() {
		return "hello world";
	}
	
	@GetMapping(value="/homes")
	public List<Hebergement> getHebergements() {
		return hebRepo.findAll();
	}
	
	@GetMapping(value="/home/{id}")
	public Optional<Hebergement> getHebergement(Long id) {
		return hebRepo.findById(id);
	}
}
