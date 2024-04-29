import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [],
  template: `
  <h1 style="text-align:center;">-|||-FITNESS SCHEDULE-|||-</h1>
  <div class="con">
      <div class="item">SUN</div>
      <div class="item">MON</div>
      <div class="item">TUES</div>
      <div class="item">WED</div>
      <div class="item">THURS</div>
      <div class="item">FRI</div>
      <div class="item">SAT</div>
      <div class="i1">8:30 CARDIO</div>
      <div class="i2">8:30 YOGA</div>
      <div class="i3">8:30 STEP</div>
      <div class="i4">8:30 CROSSFIT</div>
      <div class="i6">8:30 ROW</div>
      <div class="i3">8:30 STEP</div>
      <div class="i2">8:30 YOGA</div>
      <div class="i2">10:00 YOGA</div>
      <div class="i4">10:00 CARDIO</div>
      <div class="i1">10:00 ROW</div>
      <div class="i6">10:00 YOGA</div>
      <div class="i2">10:00 AEROBIC</div>
      <div class="i5">10:00 CARDIO</div>
      <div class="i1">10:00 AEROBIC</div>
      <div class="i5">12:00 CROSSFIT</div>
      <div class="i4">12:00 CARDIO</div>
      <div class="i5">12:00 STEP</div>
      <div class="i4">12:00 YOGA</div>
      <div class="i1">12:00 CROSSFIT</div>
      <div class="i3">12:00 AEROBIC</div>
      <div class="i2">12:00 CROSSFIT</div>
      <div class="i4">14:00 AEROBIC</div>
      <div class="i2">14:00 CROSSFIT</div>
      <div class="i3">14:00 CARDIO</div>
      <div class="i6">14:00 ROW</div>
      <div class="i5">14:00 YOGA</div>
      <div class="i1">14:00 CROSSFIT</div>
      <div class="i1">14:00 CARDIO</div>
      <div class="i1">17:00 ROW</div>
      <div class="i6">17:00 STEP</div>
      <div class="i5">17:00 YOGA</div>
      <div class="i4">17:00 AEROBIC</div>
      <div class="i2">17:00 CARDIO</div>
      <div class="i4">17:00 ROW</div>
      <div class="i5">17:00 ROW</div>
      <div class="i3">19:00 STEP</div>
      <div class="i6">19:00 ROW</div>
      <div class="i2">19:00 AEROBIC</div>
      <div class="i3">19:00 STEP</div>
      <div class="i4">19:00 CROSSFIT</div>
      <div class="i2">19:00 AEROBIC</div>
      <div class="i1">19:00 STEP</div>
  </div>
  `,
  styleUrl: './routine.component.css'
})
export class RoutineComponent {
  constructor()
  {
    
  }
}
