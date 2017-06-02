import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

import { Job } from '../job/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.sass']
})
export class JobFormComponent implements OnInit {
	job = new Job();

  constructor(private jobService: JobService, private router: Router) { }

  //on click return all the values from the form to addHero which will 
  //send json to the service 
  sendJob() {
  	console.log(JSON.stringify(this.job));
  	this.jobService.addJob(this.job).subscribe(() => this.router.navigate(['/']),
  		err => {
            // Log errors if any
            console.log(err);
            },
            );
  }

  
  ngOnInit() {}

}
