import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setBasicMetaTags({
      title: 'Imprint » Manuel Schuler',
      description: 'Imprint » Flutter, Angular Developer & YouTuber',
      keywords: ['flutter', 'angular', 'java', 'developer', 'softwareentwickler']
    });
  }

}
