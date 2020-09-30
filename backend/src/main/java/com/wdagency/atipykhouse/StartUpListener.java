package com.wdagency.atipykhouse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.wdagency.atipykhouse.model.Hebergement;
import com.wdagency.atipykhouse.repository.HebergementRepository;

@Component
public class StartUpListener {
		
	    private String appVersion;

	    @Autowired
	    private HebergementRepository heberRepo;



	    public void StartupListener(@Value("${app.version}") String appVersion) {
	        this.appVersion = appVersion;
	    }

	    @EventListener(ContextRefreshedEvent.class)
	    public void onStart() {
	    
	    	Hebergement hb = new Hebergement();
	    	hb.setLibelle("testLib");
	    	hb.setPrix(150D);
	    	hb.setType("testType");
	    	hb.setPhotos("testUrlPhoto");
	    	hb.setCouchages(5);
//	    	hb.setCommentId(5);
	    	heberRepo.save(hb);
	    }

}
