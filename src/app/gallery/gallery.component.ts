import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
  <div class="con">
  <div class="item"><img src="/assets/fit2.webp" alt=""></div>
  <div class="item"><img src="/assets/fit3.webp" alt=""></div>
  <div class="item"><img src="/assets/fit4.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit5.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit6.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit7.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit14.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit20.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit21.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit22.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit23.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit24.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit25.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit27.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit28.jpg" alt=""></div>
  <div class="item"><img src="/assets/fit30.jpg" alt=""></div>
</div>
  `,
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
