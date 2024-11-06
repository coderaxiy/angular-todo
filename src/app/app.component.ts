
import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import { AddWishComponent } from './add-wish/add-wish.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule, WishListComponent, WishFilterComponent, AddWishComponent],
})

export class AppComponent {
  items = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee'),
    new WishItem('Find grass that cuts itself')
  ];

  filter = (item: WishItem) => item;
}
