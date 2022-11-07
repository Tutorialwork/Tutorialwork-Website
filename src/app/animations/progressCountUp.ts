import { animate, state, style, transition, trigger } from '@angular/animations';

export const ProgressCountUpAnimation = [
  trigger('progressCountUp', [
    state('off', style({
      width: 0,
    })),
    state('on', style({
      width: '{{progress}}%',
    }), {
      params: {
        progress: 0
      }
    }),
    transition('off => on', [
      animate('1000ms')
    ])
  ])
]
