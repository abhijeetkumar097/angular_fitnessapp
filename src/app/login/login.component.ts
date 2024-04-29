import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `

  <div class="login-container">
    <form>
      <div id="id1"><h2>Login</h2><img src="/assets/dumbel.jpeg" alt="image"></div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" >
      </div>
      <button type="submit">Login</button>
      <p>are you new ?<span><a href=""> sign up </a></span></p>
      
    </form>
  </div>  
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor() {
    route: ActivatedRoute;
  }
}
