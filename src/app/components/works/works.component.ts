import { Component, OnInit } from '@angular/core';
import { Work } from '../../model/work';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works : Work[] = [];

  constructor(private _worksService : WorksService) { }

  ngOnInit(): void {
    this.works = this._worksService.getWorks();
  }
  
  

}
