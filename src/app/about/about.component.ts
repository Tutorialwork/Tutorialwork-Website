import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: FadeInAnimation
})
export class AboutComponent implements OnInit {

  public animationState: string = 'off';
  private readonly isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
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

}
