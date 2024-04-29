import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RoutineComponent } from './routine/routine.component';
import { DietComponent } from './diet/diet.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
const base = 'Abhijeet';
const routeConfig: Routes = [
    {
      path: `${base}/home`,
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: `${base}/login`,
      component: LoginComponent,
      title: 'Login'
    },
    {
        path: `${base}/about`,
        component: AboutComponent,
        title: 'About'
    },
    {
        path: `${base}/routine`,
        component: RoutineComponent,
        title: 'Routine'
    },
    {
        path: `${base}/diet`,
        component: DietComponent,
        title: 'Diet'
    },
    {
        path: `${base}/gallery`,
        component: GalleryComponent,
        title: 'Gallery'
    },
    {
      path: `${base}/register`,
      component: RegisterComponent,
      title: 'Register'
    }
  ];
  
  export default routeConfig;