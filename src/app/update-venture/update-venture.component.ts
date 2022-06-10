import { Component, OnInit } from '@angular/core';
import  {ConceptService} from '../concept.service';
import { Router } from '@angular/router';
import { Venture } from '../venture';

@Component({
  selector: 'app-update-venture',
  templateUrl: './update-venture.component.html',
  styleUrls: ['./update-venture.component.css']
})
export class UpdateVentureComponent implements OnInit {

  venture: Venture = new Venture();
  //venture: Venture[] = [];
  submitted = false;
  message = "";
  error:string = "";
  

  
  constructor(private conceptService: ConceptService , private router: Router) { }

  ngOnInit(): void {
  }


saveVentureEvent() {

    this.conceptService.updateVenture(this.venture).subscribe(data  =>{
    console.log(data);
    this.submitted = true;
    this.message ="Venture Update event has been executed successfully";
    window.alert(this.message);
  },
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.venture);
    this.saveVentureEvent();
  }

}