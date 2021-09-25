import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: FadeInAnimation
})
export class AboutComponent implements OnInit {

  public animationState: string = 'off';

  constructor() { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this.animationState = 'on';
        }
      });
    });
    observer.observe(document.querySelector('#about') ?? new Element());
  }

}
