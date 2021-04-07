import { Component, OnInit } from "@angular/core";

import { Climes } from "./climes";

@Component({
  selector: "app-climes",
  templateUrl: "./climes.component.html",
  styleUrls: ["./climes.component.css"]
})
export class ClimesComponent implements OnInit {
  climes: Climes[];
  constructor() {}

  ngOnInit() {
    this.climes = [
      {
        patientDetails: { firstName: "John", lastName: "Smith" },
        claimDetails: {
          claimNumber: "CL3424234",
          dateSubmitted: "2007-04-26T00:00:00",
          claimStatus: "COMPLETED"
        }
      },
      {
        patientDetails: { firstName: "John", lastName: "Smith" },
        claimDetails: {
          claimNumber: "CL34243334",
          dateSubmitted: "2010-04-26T00:00:00",
          claimStatus: "ADDITIONAL_INFO_REQUIRED"
        }
      },
      {
        patientDetails: { firstName: "Steve", lastName: "Bernard" },
        claimDetails: {
          claimNumber: "CL34234334",
          dateSubmitted: "2013-04-26T00:00:00",
          claimStatus: "NOT_RECEIVED"
        }
      }
    ];
  }
}
