import { Component, OnInit } from '@angular/core';
import { ConceptService } from '../concept.service';
import { Router } from '@angular/router';
import { Venture } from '../venture';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-get-all-ventures',
  templateUrl: './get-all-ventures.component.html',
  styleUrls: ['./get-all-ventures.component.css']
})
export class GetAllVenturesComponent implements OnInit {

   ventures!: Venture[];

  constructor(private conceptService: ConceptService, private router: Router) { }

  ngOnInit(): void {

   // this.getvenData();
  }

getvenData() {

  this.conceptService.getAllVentures().subscribe(data =>
    
    this.ventures = data );

}

  onSubmit() {
      console.log(this.ventures);
      this.getvenData();

  }


  }


