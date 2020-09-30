package com.wdagency.atipykhouse.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity(name="hebergement")
@Data
public class Hebergement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	private Double prix;
	private String type;
	private String libelle;
	private int couchages;
	private String photos;
	@OneToMany(mappedBy="hebergement")
	private List<Commentaire> comments;
	@ManyToOne
	private User owner;

}
