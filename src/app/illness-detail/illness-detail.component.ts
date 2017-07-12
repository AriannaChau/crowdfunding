import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Illness } from '../illness.model';
import { IllnessService } from '../illness.service';

@Component({
  selector: 'app-illness-detail',
  templateUrl: './illness-detail.component.html',
  styleUrls: ['./illness-detail.component.scss'],
  providers: [IllnessService]
})
export class IllnessDetailComponent implements OnInit {
  illnessId: string;
  illnessToDisplay;

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
   }

}
