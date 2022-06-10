import { Component, OnInit } from '@angular/core';
import { ConceptService } from '../concept.service';
import { Router } from '@angular/router';
import { Venture } from '../venture';

@Component({
  selector: 'app-get-venture',
  templateUrl: './get-venture.component.html',
  styleUrls: ['./get-venture.component.css']
})
export class GetVentureComponent implements OnInit {

  venture: Venture = new Venture();

  ventures!: Venture[];
  //venture: Venture[] = [];
  submitted = false;
  message = "";
  //error:string = "";
  error:string = "";

  constructor(private conceptService: ConceptService, private router: Router) { }

  ngOnInit(): void {

   // this.getvenData();
  }

getvenData() {

  const id = this.venture.ventureid;

  console.log(typeof id);

  this.conceptService.getVenture(id).subscribe(data => 
    
    this.venture = data);
    //console.log(data);
   // this.submitted = true;
  //  this.message ="Venture  event has been executed successfully";
   // window.alert(this.message);
    
  // },

  // error => console.log(error));
  }


  onSubmit() {
      console.log(this.venture);
      this.getvenData();

  }


  }

