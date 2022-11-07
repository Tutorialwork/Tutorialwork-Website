import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setBasicMetaTags({
      title: 'Manuel Schuler » Developer & YouTuber',
      description: 'Manuel Schuler » Flutter, Angular Developer & YouTuber',
      keywords: ['flutter', 'angular', 'java', 'developer', 'softwareentwickler']
    });
  }

}
