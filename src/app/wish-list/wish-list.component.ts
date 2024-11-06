import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WithItemComponent } from '../with-item/with-item.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
  imports:[CommonModule, WithItemComponent]
})
export class WishListComponent {
  @Input() wishes: WishItem[] = []
}
