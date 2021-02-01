import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  userId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    // console.log(this.route, this.route.snapshot);
    // this.route.paramMap.subscribe(data => {
    //   console.log(data);
    // });

    // this.router.events.subscribe(e => {
    //   console.log(e);
    // })

    console.log(this.router.config);
  }

  public onNavigate() {
    this.router.navigate(['navigation/child-route', 44], {queryParams: { age: 12 }})
  }

}
