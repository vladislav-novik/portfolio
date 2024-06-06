import { animate, animation, state, style, transition, trigger, useAnimation } from '@angular/animations'

const ease = '300ms cubic-bezier(0.23, 1, 0.32, 1)'

const transformAnimation = animate(ease, style({ transform: '{{ transform }}' }));
const positionAnimation = animate(ease, style({ top: '{{ top }}' }));

const anyAnimation = animation([animate(ease)]);

const falseTrueAnimation = animation([ positionAnimation,transformAnimation ])

const trueFalseAnimation = animation([ transformAnimation, positionAnimation ])

export const firstTrigger = trigger('first', [
  state('false', style({ top: '-8px', })),
  state('true', style({ top: '0', transform: 'rotate(45deg)' })),
  transition('false => true', [
    useAnimation(falseTrueAnimation, { 
      params: {
        top: '0',
        transform: 'rotate(45deg)'
      }
    })
  ]),
  transition('true => false', [
    useAnimation(trueFalseAnimation, { 
      params: {
        top: '-8px',
        transform: 'rotate(0)'
      }
    })
  ]),
]);

export const middleTrigger = trigger('middle', [
  state('false', style({ backgroundColor: '*' })),
  state('true', style({ backgroundColor: 'transparent' })),
  transition('false <=> true', useAnimation(anyAnimation))
]);

export const lastTrigger = trigger('last', [
  state('false', style({ top: '8px' })),
  state('true', style({ top: '0', transform: 'rotate(-45deg)' })),
  transition('false => true', [
    useAnimation(falseTrueAnimation, { 
      params: {
        top: '0',
        transform: 'rotate(-45deg)'
      }
    })
  ]),
  transition('true => false', [
    useAnimation(trueFalseAnimation, { 
      params: {
        top: '8px',
        transform: 'rotate(0)'
      }
    })
  ]),
]);