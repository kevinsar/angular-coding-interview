import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesPageComponent } from './shapes-page.component';

describe('ShapesPageComponent', () => {
  let component: ShapesPageComponent;
  let fixture: ComponentFixture<ShapesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
