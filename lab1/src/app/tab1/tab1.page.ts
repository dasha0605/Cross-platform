import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my_header/my-header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonLabel,  IonContent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonItem, IonInput, IonButton, 
     MyHeaderComponent, FormsModule
  ],
  standalone: true,
})
export class Tab1Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  result1: number | string = '';
  sum: number = 0;

  constructor() {}

  calculateTask1(): void {
    const numA = this.a;
    const numB = this.b;
    const numC = this.c;
    
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      this.result1 = 'Будь ласка, введіть коректні числа';
      return;
    }
    
    this.sum = numA + numB + numC;
    if (this.sum % 2 === 1) { // якщо сума непарна
      const numbers = [numA, numB, numC].filter(num => num > 10);
      this.result1 = numbers.length > 0 ? numbers.reduce((acc, val) => acc * val, 1) : 'Немає чисел більших за 10';
    } else {
      this.result1 = 'Сума не є непарною';
    }
  }
}

