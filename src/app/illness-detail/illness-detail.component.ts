import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Illness } from '../illness.model';
import { IllnessService } from '../illness.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-illness-detail',
  templateUrl: './illness-detail.component.html',
  styleUrls: ['./illness-detail.component.scss'],
  providers: [IllnessService]
})
export class IllnessDetailComponent implements OnInit {
  illnessId: string;
  donation: number;
  illnessToDisplay;
  currentAmount;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private illnessService: IllnessService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.illnessId = urlParameters['id'];
     });
    this.illnessToDisplay = this.illnessService.getIllnessById(this.illnessId);

    this.illnessToDisplay.subscribe(response => {
      this.donation = response.donation;
      console.log(this.illnessToDisplay);
      console.log(this.donation);
    });
    console.log(this.illnessToDisplay);
    console.log(this.donation);
   }

  fundProject(amount) {
    // this.donation = 0;
    var donatedAmount = parseInt(amount);
    console.log(this.donation);
    this.donation += donatedAmount;
    console.log(this.donation);
    this.illnessService.updateDonation(this.donation, this.illnessId);
    // console.log(this.currentAmount);
  }

}
