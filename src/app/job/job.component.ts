import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Job } from './job';
import { JobService } from '../services/job.service';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.css']

})

export class JobComponent implements OnInit {
	jobs: Job[];
	public isLoading = true;
	signInUser = {
    	email: 'guest@gmail.com', //make a guest user
    	password: 'guestpassword1'
  	};

	constructor (private jobService: JobService, public authService: AuthService) {}

	ngOnInit() {
		this.loadJobs();
	}

	loadJobs() {

		this.jobService.getJobs()
                           .subscribe(
                               jobs => this.jobs = jobs, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
                           		this.isLoading = false;
                           		console.log(this.jobs);

	}

	onClickSubmit() {
		console.log("clicked");
		this.authService.logInUser(this.signInUser).subscribe(

	        res => {
	          if(res.status == 200){
				console.log('auth response:', res); //check
	          }
	        },

	        err => {
	          console.log('err:', err);
	        }
   		)
  	}
}