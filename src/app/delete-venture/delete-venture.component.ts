import { Component, OnInit } from '@angular/core';
import { ConceptService } from '../concept.service';
import { Router } from '@angular/router';
import { Venture } from '../venture';

@Component({
  selector: 'app-delete-venture',
  templateUrl: './delete-venture.component.html',
  styleUrls: ['./delete-venture.component.css']
})
export class DeleteVentureComponent implements OnInit {

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

deletevenData() {

  const id = this.venture.ventureid;

  console.log(typeof id);

  this.conceptService.deleteVenture(id).subscribe();

  }


onSubmit() {
      console.log(this.venture);
      this.deletevenData();

  }


  }

