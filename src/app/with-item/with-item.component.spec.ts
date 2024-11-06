import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithItemComponent } from './with-item.component';

describe('WithItemComponent', () => {
  let component: WithItemComponent;
  let fixture: ComponentFixture<WithItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
