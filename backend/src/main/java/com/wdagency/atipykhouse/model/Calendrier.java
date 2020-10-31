package com.wdagency.atipykhouse.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

@Entity
@Table(name = "calendrier")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = String.class)
@Data
public class Calendrier {

	@Id
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@GeneratedValue(generator = "system-uuid")
	@Column(name = "id", unique = true, nullable = false, length = 36)
	private String id;
	private Date dateDebut;
	private Date dateFin;
	
	@OneToOne(targetEntity = Hebergement.class)
	@JoinColumn(name = "hebergementID", nullable = false)
	private Hebergement hebergement;
}
