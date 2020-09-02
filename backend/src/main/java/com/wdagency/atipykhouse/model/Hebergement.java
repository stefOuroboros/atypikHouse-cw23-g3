package com.wdagency.atipykhouse.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name="hebergement")
@Data
public class Hebergement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String libelle;
	private String type;
	private int couchages;
	private String photos;
	private long commentId;
	private Double prix;
}
