import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slidesStore = [
    {
      title: 'Registration and license',
      bio : 'BABAK will also provide you office spaces to rent',
      desc: 'for your business in UAE or start a whole new one. Our team of experts will guide you through the required documentation and help you register a license for your business. Our team of experts will help you find the most suitable category for your business and do the needed steps to generate the license for your business.'
    },
    {
      title: 'Office and admin support',
      bio : 'BABAK will also provide you office spaces to rent',
      desc: 'and admin team to support your business should you need more assistance. Our business center offers a great opportunity for you to start in a professional atmosphere with fully functional office at the lowest cost possible.'
    },
    {
      title: 'Premium Business Services',
      bio : 'BABAK will also provide you office spaces to rent',
      desc: 'BABAK also provides premium services as an additional package for your business such as marketing, branding, business consultancy, and more. We offer you a full package so you can start you Business in UAE in the safest, fastest, and most'
    },

  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }



  constructor(private wowService: NgwWowService) {
    this.wowService.init();
   }

  ngOnInit(): void {


  }

}
