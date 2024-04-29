import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
  <div class="about-container">
  <h1>ABOUT</h1>
  <p>
    Want to know how to exercise more without making time for the gym? Wish you knew the best home exercises that will actually get you results?
  </p>
  <p>You are in the right place.</p>
  <p>Our online workouts make it easy for you to exercise at home. Whether you have just a few minutes for a quick core workout, or if you’d like to join a month-long daily yoga challenge, there is something here that will help you exercise at home.</p>
  <p>There are a LOT of exercise videos online, especially on Youtube, but the ones that are part of our members network are the very best when it comes to teaching you how to exercise at home. These workouts require little to no equipment and are taught by excellent fitness instructors who know their stuff.</p>
  <p>So take a look through this amazing list of at-home exercise routines and find the perfect fitness instructor who can help you get a great workout done in just a few minutes each day.</p>
  <h1>OUR LATEST MAGAZINES</h1>
  </div>
      <div class="container">
        <div class="item"><img src="./assets/fit9.jpg" alt="Magazine 1"></div>
        <div class="item"><img src="./assets/fit11.jpg" alt="Magazine 2"></div>
        <div class="item"><img src="./assets/fit12.jpg" alt="Magazine 3"></div>
        <div class="item"><img src="./assets/fit13.jpg" alt="Magazine 4"></div>
      </div>
      <h1>PLANS</h1>
      <div class="container1">
        <div class="item">
          <h2>Rs.250</h2>
          <p>for 1 month</p>
        </div>
        <div class="item">
          <h2>Rs.700</h2>
          <p>for 3 months</p>
        </div>
        <div class="item">
          <h2>Rs.1300</h2>
          <p>for 6 months</p>
        </div>
        <div class="item">
          <h2>Rs.2500</h2>
          <p>for 1 year</p>
        </div>
      </div>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {
  route: ActivatedRoute;
  constructor(route: ActivatedRoute) {
    this.route = route;
  }
}
