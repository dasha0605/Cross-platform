import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LoadingController, AlertController } from '@ionic/angular';
import { BookList } from '../class/books/bookList';
import { Book } from '../class/books/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from "../my_header/my-header.component";

import { 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
   IonSegment, IonSegmentButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Додаємо підтримку *ngIf
    FormsModule, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, MyHeaderComponent,
    IonSegment, IonSegmentButton
  ]
})
export class CloudPage implements OnInit {
  @ViewChild('lineCanvas', { static: false }) private lineCanvas?: ElementRef;
  books = new BookList();
  dataUrl = 'https://api.jsonbin.io/v3/b/67d05e038960c979a56f9fb7'; 
  loading: any;
  lineChart: any;
  booksByGenre: { [key: string]: Book[] } = {};
  selectedGenre: string = 'all';
  genres: string[] = [];

  constructor(public loadingController: LoadingController, private alertController: AlertController) {
    Chart.register(...registerables);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ок'],
    });
    await alert.present();
  }

  async load() {
    console.log('Спроба отримати дані з API:', this.dataUrl);
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        if (!json || !json.record || !Array.isArray(json.record)) {
          throw new Error('Невірний формат JSON');
        }

        const data = json.record;
        this.books = new BookList();
        this.booksByGenre = {};

        try {
          data.forEach((item: any) => {
            const book = new Book(item.title, item.author, item.genre, item.pages, item.year);
            this.books.addBook(book);
            if (!this.booksByGenre[book.genre]) {
              this.booksByGenre[book.genre] = [];
            }
            this.booksByGenre[book.genre].push(book);
          });

          this.genres = Object.keys(this.booksByGenre);
        } catch (e) {
          this.presentAlert('Помилка читання JSON');
          
          return;
        }

        this.createChart();
      })
      .catch((error) => {
        console.error('Помилка завантаження:', error);
        this.presentAlert('Не вдалося завантажити дані');
      });
  }

  createChart() {
    if (!this.lineCanvas || !this.lineCanvas.nativeElement) {
      console.error('Canvas element is not found!');
      return;
    }

    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const booksByYear = this.books.countBooksByYear();
    const labels = Object.keys(booksByYear);
    const data = Object.values(booksByYear);

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Кількість книг по роках',
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          data: data
        }]
      }
    });
  }

  filterBooksByGenre() {
    if (this.selectedGenre === 'all') {
      return this.books.list;
    }
    return this.booksByGenre[this.selectedGenre] || [];
  }

  ngOnInit() {
    console.log('CloudPage ініціалізується...');
    this.load();
  }
}
