import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: FadeInAnimation
})
export class SkillsComponent implements OnInit {

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
      observer.observe(document.querySelector('#skills') ?? new Element());
    }
  }

}
