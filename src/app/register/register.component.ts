import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  template: `
  <div class="reg-container">
  <form>
    <div id="id1"><h2>Register</h2><img src="/assets/dumbel.jpeg" alt="image"></div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email">
    </div>
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" id="name" >
    </div>
    <div class="form-group">
      <label for="number">Phone No.</label>
      <input type="tel" id="number" >
    </div>
    <button type="submit">Register</button>
  </form>
</div>  
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(){
    ActivatedRoute;
  }
}
