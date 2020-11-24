package com.company.comanda;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.getcapacitor.community.fcm.FCMPlugin; 
import com.getcapacitor.plugin.http.Http;
import com.getcapacitor.community.twitter.TwitterPlugin;
import com.getcapacitor.community.facebooklogin.FacebookLogin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(FCMPlugin.class);
      add(Http.class);
	  add(TwitterPlugin.class);
      add(FacebookLogin.class);
    }});
  }
}
