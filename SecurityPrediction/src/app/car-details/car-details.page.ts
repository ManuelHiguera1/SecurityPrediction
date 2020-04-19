import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  
  name = "";
  license = "";
  phone = "";
  date = "";
  colony = "";
  street = "";
  number = "";
  reference = "";
  brand_car = "";
  model_car = "";
  year_car = "";

  constructor(private route: ActivatedRoute, public navCtrl: NavController) { 
    this.route.queryParams.subscribe(params => {
      this.name = params.name,
      this.license = params.license,
      this.phone = params.phone,
      this.date = params.date,
      this.colony = params.colony,
      this.street = params.street,
      this.number = params.number,
      this.reference = params.reference,
      this.brand_car = params.brand_car,
      this.model_car = params.model_car,
      this.year_car = params.year_car 
  });
  }

  ngOnInit() {

  }

}
