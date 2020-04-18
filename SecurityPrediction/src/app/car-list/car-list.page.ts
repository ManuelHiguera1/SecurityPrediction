import { Component, OnInit } from '@angular/core';
import { CarService } from "../shared/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {

  constructor(private carService:CarService) { }


  ngOnInit() {this.get_robberies();}
 
    get_robberies = () =>
      this.carService
      .get_robberies().subscribe(res =>(this.coffeeOrders = res));

}
