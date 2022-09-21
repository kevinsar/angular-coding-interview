import { Component, OnInit } from '@angular/core';
import { ServiceMockService } from './service-mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codepair-angular-interview2';
  randomNumbers: number[] = [];

  constructor(private serviceMockService: ServiceMockService) {

  }

  ngOnInit(): void {

  }

  getRandomNumbers(): void {
    this.serviceMockService.getMockServiceItem().subscribe((numbers: number[]) => {
      this.randomNumbers = numbers;
    }, error => {
      console.log(error);
      this.randomNumbers = [];
    })
  }
}
