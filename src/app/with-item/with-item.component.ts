import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './with-item.component.html',
  styleUrl: './with-item.component.css'
})
export class WithItemComponent {
  @Input() wishText!: string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>()

  get cssClasses() {
    return {
      'text-decoration-line-through': this.fullfilled,
      'text-muted': this.fullfilled
    }
  }
  
  toggleFullfilled() {
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)
  }
}
