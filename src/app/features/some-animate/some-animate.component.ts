import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, transition, state, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-some-animate',
  templateUrl: './some-animate.component.html',
  styleUrls: ['./some-animate.component.scss'],
  animations: [
    trigger('smallBig', [
      state('small', style({
        // opacity: 0,
        transform: 'scale(1)'
      })),
      
      state('big', style({
        // opacity: 1,
        transform: 'scale(2)'
      })),

      transition('small <=> big', [
        animate(500)
      ]),

      // transition('big => small', [
      //   animate('1s')
      // ])
    ]),

    trigger('elementTriger', [

      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),

      // transition(':enter', [
      //   style({
      //     opacity: 0,
      //     transform: 'translateY(20px)',
      //   }),
      //   animate('2s')
      // ]),

      // transition(':leave', [
      //   animate('1s', style({
      //     opacity: 0,
      //     transform: 'translateX(-100%)',
      //   }))
      // ])

      transition('void => *', [
        animate('1s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-80px)',  offset: 0}),
          style({ opacity: 0.6, transform: 'translateY(20px)',  offset: 0.6}),
          style({ opacity: 1, transform: 'translateY(0px)',  offset: 1}),
        ]))
      ]),

      transition(':leave', [
        animate('0.5s ease-in-out', keyframes([
          style({ opacity: 1, transform: 'translateX(0px)',  offset: 0}),
          style({ opacity: 0.6, transform: 'translateX(20px)',  offset: 0.6}),
          style({ opacity: 0, transform: 'translateX(-40px)',  offset: 1}),
        ]))
      ])
    ])
  ]
})
export class SomeAnimateComponent implements OnInit {

  state: 'small' | 'big' = 'small';
  items = [];
  itemId = 1234;

  // @HostBinding('@.disabled') disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimation() {
    // this.items.push({id : this.itemId++})
    // this.disabled = !this.disabled;
    this.state = (this.state === 'small' ? 'big' : 'small');
  }

  deleteItem(id: number) {
    this.items = this.items.filter((e) => id !== e.id);
  }

  onAnimationStart(e) {
    console.log(e);
  }

  onAnimationEnd(e) {
    this.state = (e.toState === 'small' ? 'big' : 'small');
    console.log('animation ended', e);
  }
}
