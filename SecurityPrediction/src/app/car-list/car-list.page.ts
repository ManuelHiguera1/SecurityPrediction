import { Component, OnInit } from '@angular/core';
import { CarService } from "../shared/car.service";
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit {

  constructor(private carService:CarService,
              public navCtrl: NavController) { }

  ngOnInit() {this.robberies();}
 
    robberies_list;
    
    robberies = () =>
      this.carService.get_robberies().subscribe(res =>(this.robberies_list = res));   

      goToDetails(robberie){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            name: robberie.payload.doc.data().name,
            license: robberie.payload.doc.data().license,
            phone: robberie.payload.doc.data().phone,
            date: robberie.payload.doc.data().date,
            colony: robberie.payload.doc.data().colony,
            street: robberie.payload.doc.data().street,
            number: robberie.payload.doc.data().number,
            reference: robberie.payload.doc.data().reference,
            brand_car: robberie.payload.doc.data().brand_car,
            model_car: robberie.payload.doc.data().model_car,
            year_car: robberie.payload.doc.data().year_car
        }};
      this.navCtrl.navigateForward('/car-details', navigationExtras);
      }
    }
