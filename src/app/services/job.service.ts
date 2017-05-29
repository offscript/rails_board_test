import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Job } from '../job/job';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JobService {

	constructor (private http: Http) {}

	private jobsUrl = 'http://localhost:3000/posts';

	//index Jobs
	getJobs() : Observable<Job[]> {
 		return this.http.get(this.jobsUrl)
                    .map(this.extractData)
                    .catch((error:any) =>  Observable.throw(error.json().error || 'Server error'));
	}

	addJob(body: Object) : Observable<Job> {
		let json_body = JSON.stringify({"posts": body});
		console.log(json_body);
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		return this.http.post(this.jobsUrl, json_body, options) //post request
						.map((res:Response) => res.json())
						.catch((error:any) =>  Observable.throw(error.json().error || 'Server error'));
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log(body.data[0]);
		return body.data || { };
	}
}