import { Component} from '@angular/core';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-register-motorist',
  templateUrl: './register-motorist.page.html',
  styleUrls: ['./register-motorist.page.scss'],
})
export class RegisterMotoristPage{

  constructor(
    private userService: UserService
  ) { }

  onSubmit() {
    let data = this.userService.form.value;
    this.userService.createUser(data)
      .then(res => {
           /*do something here....
           maybe clear the form or give a success message*/
      });
}
}
