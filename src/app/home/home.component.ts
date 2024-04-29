import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `<main>
    <section class="sec">
    <h1>Fitness Factory</h1>
    </section>
  </main>
  <section class="sec1">
    <h1>Register for upcoming events</h1>
    <br/>
    <button><a [routerLink]="['/Abhijeet/register']">Register</a></button>
    </section>
    <section class="s1">
    <p>Want to know how to exercise more without making time for the gym? Wish you knew the best home exercises that will actually get you results?</p>
    <p>You are in the right place.</p>
    <p>Our online workouts make it easy for you to exercise at home. Whether you have just a few minutes for a quick core workout, or if you’d like to join a month-long daily yoga challenge, there is something here that will help you exercise at home.</p>
    <p>There are a LOT of exercise videos online, especially on Youtube, but the ones that are part of our members network are the very best when it comes to teaching you how to exercise at home. These workouts require little to no equipment and are taught by excellent fitness instructors who know their stuff.</p>
    <p>So take a look through this amazing list of at-home exercise routines and find the perfect fitness instructor who can help you get a great workout done in just a few minutes each day.</p>
    </section>
    <section>
    <div class="flex-container">
        <div class="flex-item">
            <h2>01</h2>
            <p>ANYTIME. ANYWHERE. FITNESS THAT FITS.</p>
        </div>
        <div class="flex-item">
            <h2>02</h2>
            <p>MORE CHOICES. LESS HASSLE.</p>
        </div>
        <div class="flex-item">
            <h2>03</h2>
            <p>2022 EVERY AGE. EVERY BODY.</p>
        </div>
        <div class="flex-item">
            <h2>04</h2>
            <p>FLEXIBLE SCHEDULE. WORK OUT ANYTIME!</p>
        </div>
    </div>

    <div class="flex-container">
        <div class="flex-item">
            <img src="/assets/fit8.jpg" alt="Image" height="220px">
        </div>
        <div class="flex-item">
            <p style="font-size:25px;padding-top:30px;max-width:200px">FITNESS IS NOT JUST ABOUT A DAILY ACTIVITY</p>
        </div>
        <div class="flex-item">
            <div style="text-align: left;">
                <p style="font-style:ariel;font-weight: bold;padding-top:30px;">PLAN YOUR HEALTHY DIET</p>
                <p style="max-width:300px">Becoming and staying healthy is something everyone should strive for! Let us help you on your journey.</p>
            </div>
        </div>
    </div>
    </section>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
