
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonMenuToggle, IonToolbar, IonHeader,IonTitle, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { playForwardSharp, playForwardOutline, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'], 
  imports: [ CommonModule, IonMenuToggle, IonToolbar,IonHeader,IonTitle,RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    {
      title: 'ÜRETİM',
      url: '',
      icon: 'play-forward',
      children: [
        { title: 'Ürün', url: '/product/10', icon: 'play-forward' },
        { title: 'Ürünler', url: '/products', icon: 'play-forward' },
      ],
    },
    {
      title: 'DEPO',
      url: '',
      icon: 'play-forward',
      children: [
        { title: 'Depo Giriş', url: '/depo-giris', icon: 'play-forward' },
        { title: 'Depo Çıkış', url: '/depo-cikis', icon: 'play-forward' },
        { title: 'Depo Stok', url: '/depo-stok', icon: 'play-forward' },
      ],
    },
  ];
  public labels = ['CHEKICH Recent Fashion'];
  constructor() {
    addIcons({ playForwardSharp, playForwardOutline, bookmarkOutline, bookmarkSharp });
  }
}
