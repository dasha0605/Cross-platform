import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonItem, IonLabel,  IonList } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my_header/my-header.component";
import { PlantFactory } from '../class/Abstract/PlantFactory';
import { DecorativePlant } from '../class/Abstract/Plants';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonList, IonLabel,  IonContent, 
     
    IonItem,  CommonModule,
     MyHeaderComponent, FormsModule,
  ],
})
export class AbstractPage implements OnInit {
  plants: DecorativePlant[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67e056cb8561e97a50f16783'; 

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    try {
      const response = await fetch(this.dataUrl);
      const json = await response.json();
      this.plants = json.record.map((plantData: any) =>
        PlantFactory.getPlant(plantData.name, plantData.height, plantData.lifespan, plantData.parameter)
      );
    } catch (error) {
      console.error('Помилка при завантаженні даних:', error);
    }
  }

  getTallestPlants(): DecorativePlant[] {
    if (!this.plants.length) return [];
    const maxHeight = Math.max(...this.plants.map(plant => plant.height));
    return this.plants.filter(plant => plant.height === maxHeight);
  }
  
  getShortestPlants(): DecorativePlant[] {
    if (!this.plants.length) return [];
    const minHeight = Math.min(...this.plants.map(plant => plant.height));
    return this.plants.filter(plant => plant.height === minHeight);
  }
  
}