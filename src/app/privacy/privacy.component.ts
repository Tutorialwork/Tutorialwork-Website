import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setBasicMetaTags({
      title: 'Privacy » Manuel Schuler',
      description: 'Privacy » Flutter, Angular Developer & YouTuber',
      keywords: ['flutter', 'angular', 'java', 'developer', 'softwareentwickler']
    });
  }

}
