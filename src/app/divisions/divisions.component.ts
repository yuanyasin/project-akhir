import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionsService } from '../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';
  constructor(private divisionsService:DivisionsService) { }

  ngOnInit(): void {
    this.retrieveDivision()
  }

  retrieveDivision():void{
    this.divisionsService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )

  }
}