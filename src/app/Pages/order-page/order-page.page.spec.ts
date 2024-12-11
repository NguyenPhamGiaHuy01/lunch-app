import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderPagePage } from './order-page.page';

describe('OrderPagePage', () => {
  let component: OrderPagePage;
  let fixture: ComponentFixture<OrderPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
