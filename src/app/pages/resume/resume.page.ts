import { Component, OnInit } from '@angular/core';

interface Resume {
  jobs: Array<object>;
  skills: Array<string>;
  education: Array<object>;
  otherAccomplishments: Array<string>;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  resumeData: Resume;
  constructor() {}

  ngOnInit() {
    this.resumeData = {
      jobs: [
        {
          company: 'Travelers Insurance',
          role: 'Software Developer',
          dates: 'Jan 2012 - Present',
          responsibilities: [
            'Lead development of an internal web application that gives customer service representatives a 360 degree view of Travelers customers.',
            'Partake in software architecture discussions pertaining to the omnichannel release train.',
            'Write technical user stories for my agile team.',
            'Direct /"Hour of Code/"training sessions for members of my department.',
            'Educate junior developers and contractors on development tools and practices.',
          ],
          highlights: [
            'Worked as a developer on the self-service web application and mobile app for Travelers Personal Insurance customers.',
            `Drove the conversion from AngularJS to Angular on my team's application, and inspired other teams to do the same.`,
            `Played a crucial role in refactoring and revamping the Customer 360 application into the success that it is today.`,
          ],
        },
        {
          company: 'TicketNetwork',
          role: 'Junior Software Engineer',
          dates: 'Jan 2011 - Dec 2011',
          responsibilities: [
            'Created and updated e-commerce web sites for ticket brokers using a template-based tool.',
            `Developed new functionality on the company's news and e-commerce web sites.`,
          ],
          highlights: ['Started my web development career working on web sites related to entertainment ticket sales.'],
        },
      ],
      skills: [
        'Web Development',
        'Technical Communication',
        'Agile Software Development',
        'Test-Driven Development',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Ionic',
        'Vue',
        'React',
        'React Native',
        'NodeJS',
        'Express',
        'MongoDB',
        'HTML',
        'CSS/SCSS',
        'Firebase',
        'Azure',
        'AWS Lambda Functions',
        'Pivotal Cloud Foundry',
      ],
      otherAccomplishments: [
        'Published four original applications to the App Store and Google Play.',
        'Published two Amazon Alexa skills.',
        'Was part of an Innovation Jam team whose project was filed for a U.S. patent.',
      ],
      education: [
        {
          school: 'Central Connecticut State University',
          yearGraduated: '2014',
          degree: 'Master of Science in Computer Information Technology',
        },
        {
          school: 'University of Connecticut',
          yearGraduated: '2010',
          degree: 'Bachelor of Science in Cognitive Science',
        },
      ],
    };
  }
}
