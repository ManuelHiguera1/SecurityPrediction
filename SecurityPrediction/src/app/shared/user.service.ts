import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: AngularFirestore) {}
    form = new FormGroup({        
        name: new FormControl(''),
        license: new FormControl('')
    })
  
    create_user(data) {
      return new Promise<any>((resolve, reject) =>{
        this.firestore
          .collection("Users")
          .add(data)
          .then(res => {}, err => reject(err));
      });
  }
}
