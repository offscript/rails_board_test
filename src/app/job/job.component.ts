import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Job } from './job';
import { JobService } from '../services/job.service';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.css']

})

export class JobComponent implements OnInit {
	jobs: Job[];
	public isLoading = true;

	constructor (private jobService: JobService) {}

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

}