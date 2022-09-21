import { Component, OnInit } from '@angular/core';
import { ServiceMockService } from '../..//service-mock.service';

@Component({
  selector: 'app-shapes-page',
  templateUrl: './shapes-page.component.html',
  styleUrls: ['./shapes-page.component.scss'],
})
export class ShapesPageComponent implements OnInit {
  randomNumbers: number[] = [];
  constructor(private serviceMockService: ServiceMockService) {}

  ngOnInit(): void {}

  getRandomNumbers(): void {
    this.serviceMockService.getMockServiceItem().subscribe(
      (numbers: number[]) => {
        this.randomNumbers = numbers;
      },
      (error) => {
        console.log(error);
        this.randomNumbers = [];
      }
    );
  }
}
