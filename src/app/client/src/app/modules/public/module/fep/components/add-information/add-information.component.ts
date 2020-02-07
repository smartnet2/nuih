import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.css']
})
export class AddInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reading(){
    document.getElementById('reading').scrollIntoView();
  }
  learn(){
    document.getElementById('learnOn').scrollIntoView();
  }
  things(){
    document.getElementById('things').scrollIntoView();
  }

  onClickAlert()
	{
		alert("Thank you for your interest.Uday-Fintech education platform pilot has been closed and would be up for fresh registrations soon.");
	}
}
