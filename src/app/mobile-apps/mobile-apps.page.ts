import { Component, OnInit } from '@angular/core';

interface MobileApp {
  name: string;
  iosUrl: string;
  androidUrl: string;
  status: string;
  pitch: string;
  icon: string;
}

@Component({
  selector: 'app-mobile-apps',
  templateUrl: './mobile-apps.page.html',
  styleUrls: ['./mobile-apps.page.scss'],
})
export class MobileAppsPage implements OnInit {
  mobileApps: MobileApp[];
  constructor() {}

  ngOnInit() {
    this.mobileApps = [
      {
        name: 'Words Against The Clock',
        iosUrl: 'https://itunes.apple.com/us/app/words-against-the-clock/id1113839827?mt=8',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.ionicframework.wordbuildinggame987903',
        status: 'Active',
        pitch: 'A fast-paced word building game with a global leaderboard.',
        icon: '/assets/images/watc_icon.png',
      },
      {
        name: 'Football Squares Number Picker',
        iosUrl: 'https://itunes.apple.com/us/app/football-squares-number-picker/id1191093836?ls=1&mt=8',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.ionicframework.footballsquaresnumberpicker220768&hl=en',
        status: 'Active',
        pitch: 'A fancy random number picker designed for Football Squares games.',
        icon: '/assets/images/football_squares_icon.png',
      },
      {
        name: 'Memory Stretch',
        iosUrl: 'https://itunes.apple.com/us/app/memory-stretch/id1330419707?mt=8',
        androidUrl: 'https://play.google.com/store/apps/details?id=io.ionic.mcomm.memorystretch&hl=en',
        status: 'Active',
        pitch: 'A collection of games designed to test the limits of your memory.',
        icon: '/assets/images/memory_stretch_icon.png',
      },
      {
        name: 'Multi-Task Color-Match',
        iosUrl: 'https://itunes.apple.com/us/app/multi-task-color-match/id1076176930?mt=8',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.ionicframework.colormatchinggame113676&hl=en',
        status: 'Active',
        pitch: 'Can you manage to play two color-matching games at the same time?',
        icon: '/assets/images/mtcm_icon.png',
      },
    ];
  }

  goToAppStore(url) {
    window.open(url, '_blank');
  }
}
