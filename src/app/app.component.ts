import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterModule],
  template: `
  <main>
  <header class="homehead">
  <div class="homeimg"><a [routerLink] ="['/Abhijeet/home']"><img src="assets/--FITNESS-FACTORY--.png"></a></div>
  <div class="homeitem"><a [routerLink]="['/Abhijeet/about']">About</a></div>
  <div class="homeitem"><a [routerLink]="['/Abhijeet/gallery']">Gallery</a></div>
  <div class="homeitem"><a [routerLink]="['/Abhijeet/routine']">Routine</a></div>
  <div class="homeitem"><a [routerLink]="['/Abhijeet/diet']">Diet</a></div>
  <div class="homeitem"><a [routerLink]="['/Abhijeet/login']">Login</a></div>
  </header>
  <router-outlet></router-outlet>
  </main>
  <footer style="padding-top:100px; background-color: rgba(9, 4, 8, 0.808); color: rgba(240, 255, 255, 0.515); font-size: 20px; text-align: center;">
    <div class="flex-container">
        <div class="flex-item">
            <pre>CUSTOMER SERVICE:</pre>
            <p>1800-0000-0001</p>
        </div>
        <div class="flex-item">
            <pre>ADDRESS:</pre>
            <p>lpu unimall ground floor</p>
        </div>
        <div class="flex-item">
            <pre>EMAIL ADDRESS:</pre>
            <p>supportfitnessclub.gmail.com</p>
        </div>
    </div>
</footer>


  `
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitnessapp';
}
