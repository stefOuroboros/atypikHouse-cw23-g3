package factory;

import com.wdagency.atipykhouse.model.Hebergement;

public class HebergementFactory {

	
	public Hebergement simpleHouse() {
    	Hebergement hb = new Hebergement();
    	hb.setLibelle("testLib");
    	hb.setPrix(150D);
    	hb.setType("testType");
    	hb.setPhotos("testUrlPhoto");
    	hb.setCouchages(5);
    	return hb;
	}
}
