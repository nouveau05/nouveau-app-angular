import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Venture } from './venture';
import { ConceptService } from './concept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nouveau-venture';

  venture:Venture = new Venture();
  submitted = false;
  message = "";

  constructor(private conceptService: ConceptService,
    private router: Router)  {}

  ngOnInit(): void {
    
  }


}
