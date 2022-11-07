import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ProgressCountUpAnimation } from '../animations/progressCountUp';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss'],
  animations: ProgressCountUpAnimation
})
export class SkillProgressComponent implements OnInit {

  @Input() public skillName: string = '';
  @Input() public skillProgress: number = 0;
  public animationState = 'off';
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

      setTimeout(() => {
        observer.observe(document.querySelector('#' + this.skillName + '-progress') ?? new Element());
      }, 10);
    }
  }

}
