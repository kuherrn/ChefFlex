import { Injectable } from '@angular/core';
import { Job } from '../shared/model/Job';
import { sample_jobs } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }
  getAll():Job[] {
    return sample_jobs
  }
}
