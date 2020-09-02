package com.wdagency.atipykhouse.model;

import java.util.Date;

import lombok.Data;

@Data
public abstract class User {

	private long id;
	private String nom;
	private String prenom;
	private Date dateNaissance;
	private int age;
	private String profil;
}
