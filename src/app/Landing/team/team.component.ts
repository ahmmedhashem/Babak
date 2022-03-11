import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  blogs:any = [
    {
      img : './assets/img/team-one.jpeg',
      title : "Ms. Samar Marwan",
      job : 'Lawyer',
    },
    {
      img : './assets/img/team-two.jpeg',
      title : "Mr. Ahmed Halawany",
      job : 'Legal Researcher',
    },
    {
      img : './assets/img/team-three.jpeg',
      title : "Mr. Essam Amin",
      job : 'Legal Researcher',
    },
    {
      img : './assets/img/team-four.jpeg',
      title : "Mr. Sameh Shaaban",
      job : 'Legal Researcher',
    },
    {
      img : './assets/img/team-five.jpeg',
      title : "Mr. Akram Ali",
      job : 'Debt Collector',
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="car-button-right"> <i class="fa-solid fa-arrow-right-long"></i>  </div>', '<div class="car-button-left"> <i class="fa-solid fa-arrow-right-long"></i>  </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  showContact(e:any){
    let ele = e.target.children[2];
    $(ele).show(400);
  }
  hideContact(e:any){
    let ele = e.target.children[2];
    $(ele).hide(400);
  }

  showContactH(e:any){
    let ele = e.target.children[2].children[2];
    $(ele).show(400);
  }
  hideContactH(e:any){
    let ele = e.target.children[2].children[2];
    $(ele).hide(400);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
