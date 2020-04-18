import { Component} from '@angular/core';
import {CarService} from '../shared/car.service'
import {AlertController} from '@ionic/angular'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-report-car',
  templateUrl: './report-car.page.html',
  styleUrls: ['./report-car.page.scss'],
})
export class ReportCarPage{

  constructor(
    private carService: CarService,
    public alertController: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Reporte de robo',
      message: 'Reporte registrado CORRECTAMENTE',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    let data = this.carService.form.value;
    this.carService.create_robberie(data)
      .then(res => {

           
    });
    this.presentAlert();
    this.carService.form.reset();
  }
}


  
