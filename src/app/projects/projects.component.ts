import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: FadeInAnimation
})
export class ProjectsComponent implements OnInit {

  public animationState = 'off';

  constructor() { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          this.animationState = 'on';
        }
      });
    });
    observer.observe(document.querySelector('#projects') ?? new Element());
  }

}
