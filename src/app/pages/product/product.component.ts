import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonContent, IonHeader, IonToolbar, IonTitle, IonCardSubtitle,IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [ CommonModule, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonContent, IonHeader, IonToolbar, IonTitle, IonCardSubtitle, IonButtons, IonMenuButton],
})
export class ProductComponent implements OnInit {
  public title: string = 'Ürün';
  public productId: string | null = null;
  public productDetails: any = null; // Seçili ürün için
  private products = [
    {
      id: '1',
      name: 'Ürün 1',
      description: 'Bu Ürün 1 açıklamasıdır.',
      price: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Ürün 2',
      description: 'Bu Ürün 2 açıklamasıdır.',
      price: 200,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId =  params.get('id');
      if (this.productId) {
        this.productDetails = this.products.find(product => product.id === this.productId) || null;
      }
    });
  }
}
