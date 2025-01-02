import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProductsComponent implements OnInit {
  public title: string = 'Ürünler';
  public products: any = [
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
    {
      id: '4',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '5',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '6',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '7',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '8',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '3',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },{
      id: '10',
      name: 'Ürün 3',
      description: 'Bu Ürün 3 açıklamasıdır.',
      price: 300,
      image: 'https://via.placeholder.com/150',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}
