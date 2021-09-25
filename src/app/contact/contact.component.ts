import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animations/fadeIn';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: FadeInAnimation
})
export class ContactComponent implements OnInit {

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
    observer.observe(document.querySelector('#contact') ?? new Element());
  }

}
