import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: FadeInAnimation
})
export class SkillsComponent implements OnInit {

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
    observer.observe(document.querySelector('#skills') ?? new Element());
  }

}
