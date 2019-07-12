import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeBicComponent } from './awesome-bic.component';

describe('AwesomeBicComponent', () => {
  let component: AwesomeBicComponent;
  let fixture: ComponentFixture<AwesomeBicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeBicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeBicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should find the <h1> with fixture.debugElement.query(By.css)', () => {
    const awe: DebugElement = fixture.debugElement;
    const paragraphDe = awe.query(By.css('h1'));
    const h1: HTMLElement = paragraphDe.nativeElement;
    expect(h1.textContent).toEqual('AWESOME BICYCLE PRODUCTS');
  });
});
