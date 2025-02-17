import { Component } from '@angular/core';
import {  IonContent, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my_header/my-header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonLabel, 
     IonContent, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
     MyHeaderComponent, FormsModule, CommonModule  
  ],
  standalone: true,
})
export class Tab3Page {
  matrix: number[][] = [];
  matrixResult: string[] = [];
  size: number = 0;

  constructor() {}

  generateMatrix(size: number) {
    if (size <= 0 || isNaN(size)) {
      this.matrixResult = ['Невірний розмір матриці'];
      return;
    }

    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 100);
      }
    }

    this.matrixResult = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (j % 2 === 0 && this.matrix[i][j] > 50) {
          this.matrixResult.push(this.matrix[i][j].toString());
        }
      }
    }

    if (this.matrixResult.length === 0) {
      this.matrixResult = ['Немає елементів, що відповідають умові'];
    }
  }

  shouldHighlight(cell: number, columnIndex: number): boolean {
    return columnIndex % 2 === 0 && cell > 50;
  }
}

