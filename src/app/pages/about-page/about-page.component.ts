import { Component, OnInit } from '@angular/core';
// import roundImage from '../../../assets/images/about/round.jpg';
// import mapleImage from '../../../assets/images/about/maple-400.jpg';
// import leyImage from '../../../assets/images/about/ley1.jpg';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  images = {
    // roundImage,
    // mapleImage,
    // leyImage
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
