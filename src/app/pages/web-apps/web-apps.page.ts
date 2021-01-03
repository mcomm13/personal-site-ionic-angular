import { Component, OnInit } from '@angular/core';
import { WebApp } from '../../interfaces/web-app';

@Component({
  selector: 'app-web-apps',
  templateUrl: './web-apps.page.html',
  styleUrls: ['./web-apps.page.scss'],
})
export class WebAppsPage implements OnInit {
  webApps: WebApp[];
  constructor() {}

  ngOnInit() {
    this.webApps = [
      {
        name: 'Leave To Chance',
        description: `When you find yourself having to make a decision between multiple options, and you would prefer to just leave that decision to chance, this app is for you.  Simply enter in the number of possible options that you are choosing between, and this app will randomly pick an option for you.`,
        url: 'https://leave-to-chance.web.app',
      },
      {
        name: 'Football Squares Number Picker',
        description:
          'A web version of my mobile app of the same name.  Use this app if you are running a game of Football Squares (i.e. Super Bowl Squares), and you reach the point where you need to randomly pick the numbers for the headers of your grid.',
        url: 'https://football-squares-number-picker.web.app',
      },
    ];
  }
}
