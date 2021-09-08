import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-stuff',
  templateUrl: './footer-stuff.component.html',
  styleUrls: ['./footer-stuff.component.css']
})
export class FooterStuffComponent implements OnInit {
  footerImage = 'https://www.optimation.co.nz/assets/ee0061f3fc/programmers-while-coding.png';
  constructor() { }

  ngOnInit() {
  }

}
