import { Component } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment.prod"; //change back to production
//import { environment } from "../environments/environment"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'app works!';
 constructor(public authToken: Angular2TokenService){
    this.authToken.init();
  }
}
