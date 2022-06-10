import { Component, OnInit } from '@angular/core';
import  {ConceptService} from '../concept.service';
import { Router } from '@angular/router';
import { Venture } from '../venture';

@Component({
  selector: 'app-create-venture',
  templateUrl: './create-venture.component.html',
  styleUrls: ['./create-venture.component.css']
})
export class CreateVentureComponent implements OnInit {

  venture: Venture = new Venture();
  //venture: Venture[] = [];
  submitted = false;
  message = "";
  error:string = "";

  
  constructor(private conceptService: ConceptService , private router: Router) { }

  ngOnInit(): void {
  }


saveVentureEvent() {

    this.conceptService.addVenture(this.venture).subscribe(data  =>{
    console.log(data);
    this.submitted = true;
    this.message ="Venture Add event has been executed successfully";
    window.alert(this.message);
  },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.venture.revenue_estimation);
    console.log(typeof this.venture.revenue_estimation)
    this.saveVentureEvent();
  }

}




