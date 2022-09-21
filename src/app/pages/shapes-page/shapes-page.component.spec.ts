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
  
  describe('getRandomNumbers', () => {
    it('should get numbers from mock service, then set them to random numbers value', () => {
      expect(component.randomNumbers).toEqual([1,2,3,4,5]);
    });

    it('should reset random numbers to empty array if get random numbers call fails', () => {
      expect(component.randomNumbers).toEqual([]);
    });
  });
});
