import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.css'
})
export class AddWishComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  constructor() { }

  ngOnInit(): void {
  }

  newWishText  = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
