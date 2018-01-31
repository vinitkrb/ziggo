import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    console.log('Inside landing page component');
  }
}

