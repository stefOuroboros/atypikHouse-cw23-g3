package com.wdagency.atipykhouse.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wdagency.atipykhouse.model.User;
import com.wdagency.atipykhouse.service.UserService;

@CrossOrigin
@RestController(value = "user")
public class UserController {

	@Resource
	UserService userService;
	
	@GetMapping(value="all")
	public List<User> getUsers() {
		return userService.getUsers();
	}
	
	@GetMapping(value="/{email}")
	public User getUser(@PathVariable String email) {
		return userService.findUserByEmail(email);
	}
	
	@PostMapping(value="add")
	public void createUser(User user) {
		userService.createuser(user);
	}
}
