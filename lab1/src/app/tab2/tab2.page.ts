import { Component } from '@angular/core';
import {  IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my_header/my-header.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonLabel, IonButton, IonInput, IonItem, IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonContent, MyHeaderComponent, FormsModule],
  standalone: true,
})
export class Tab2Page {
  start: number | null = 0;
  end: number | null = 0;
  result2: string = '';

  constructor() {}

  calculateTask2(): void {
    if (this.start === null || this.end === null) {
      this.result2 = 'Будь ласка, введіть коректні значення';
      return;
    }
  
    if (this.start > this.end) {
      this.result2 = 'Початок проміжку має бути меншим за кінець';
      return;
    }
  
    let numbers: number[] = [];
    for (let i = this.start; i <= this.end; i++) {
      if (i % 3 === 1) {
        numbers.push(i);
      }
    }
  
    this.result2 = 'Кількість чисел: ' + numbers.length + ', числа: ' + numbers.join(', ');
  }
  
}

