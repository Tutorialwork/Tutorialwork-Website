import { animate, state, style, transition, trigger } from '@angular/animations';

export const FadeInAnimation = [
  trigger('fadeIn', [
    state('off', style({
      opacity: 0,
      'margin-top': '-30px'
    })),
    state('on', style({
      opacity: 1,
      'margin-top': '0'
    })),
    transition('off => on', [
      animate('1000ms')
    ])
  ])
]
