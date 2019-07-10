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
    expect(component).toBeTruthy();
  });
});
