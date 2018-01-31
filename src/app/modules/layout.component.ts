import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/') {
      // If there is any landing page (most probably it will be a dashboard page which we need to implement in future),
      // we should redirect to that page instead of user-management page!
      this.router.navigate(['/user-management']);
    }
  }

}
