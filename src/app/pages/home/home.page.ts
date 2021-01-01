import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../../interfaces/contact-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  contactInfo: ContactInfo = {
    facebook: 'https://www.facebook.com/profile.php?id=9031270',
    twitter: 'https://twitter.com/mcomm13',
    linkedin: 'https://www.linkedin.com/in/michael-commendatore-16654b93/',
    email: 'michael.commendatore@outlook.com',
    github: 'https://github.com/mcomm13',
    youtube: 'https://www.youtube.com/channel/UClY5uTEhLTliK98lIJAD-nw',
  };

  constructor() {}

  ngOnInit() {}
}
