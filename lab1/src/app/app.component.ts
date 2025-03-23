import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu,IonHeader,IonToolbar,IonTitle, IonContent,IonMenuToggle, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,IonMenu,IonHeader,IonToolbar,IonTitle, IonContent,IonMenuToggle, IonItem, IonList],
})
export class AppComponent {
  constructor() {}
}
