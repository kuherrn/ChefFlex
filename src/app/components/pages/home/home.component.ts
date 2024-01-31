import { Component, OnInit } from '@angular/core';
import { Job } from '../../../shared/model/Job';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  jobs:Job[] = [];
  constructor(private api:JobService) {
    this.jobs = api.getAll()
  }
  ngOnInit(): void {
      
  }

}
