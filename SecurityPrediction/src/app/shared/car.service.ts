import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore: AngularFirestore) {}
    form = new FormGroup({    
        name: new FormControl(''),
        license: new FormControl(''),
        phone: new FormControl(''),
        date: new FormControl(''),
        brand_car: new FormControl(''),
        model_car: new FormControl(''),
        year_car: new FormControl(''),
        colony: new FormControl(''),
        street: new FormControl(''),
        number: new FormControl(''),
        reference: new FormControl('')
    })
  
    create_robberie(data) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore
          .collection("Robberies").add(data)
          .then(res => {}, err => reject(err));
      });
  }

  get_robberies() { 
    return this.firestore.collection("Robberies").snapshotChanges();
  }
}
