package com.wdagency.atipykhouse.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController()
@RequestMapping("/main")
public class HouseController {

	
	@GetMapping(value="/test")
	public String hello() {
		return "hello world";
	}
}
