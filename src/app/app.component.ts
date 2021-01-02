import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'newspaper',
    },
    {
      title: 'Web Apps',
      url: '/web-apps',
      icon: 'code-slash',
    },
    {
      title: 'Mobile Apps',
      url: '/mobile-apps',
      icon: 'apps',
    },
    {
      title: 'Music',
      url: '/music',
      icon: 'musical-notes',
    },
    {
      title: 'Resume',
      url: '/resume',
      icon: 'laptop',
    },
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
