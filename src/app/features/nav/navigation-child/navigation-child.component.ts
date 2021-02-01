import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-child',
  templateUrl: './navigation-child.component.html',
  styleUrls: ['./navigation-child.component.scss']
})
export class NavigationChildComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log( this.route.snapshot )
  }

}
