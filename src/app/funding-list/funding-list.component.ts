import { Component, OnInit } from '@angular/core';
import { Illness } from '../illness.model';
import { Router } from '@angular/router';
import { IllnessService } from '../illness.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-funding-list',
  templateUrl: './funding-list.component.html',
  styleUrls: ['./funding-list.component.scss'],
  providers: [IllnessService]
})
export class FundingListComponent implements OnInit {
  illnesses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private illnessService: IllnessService) { }

  ngOnInit() {
    this.illnesses = this.illnessService.getIllnesses();
  };

  goToDetailPage(clickedIllness) {
    this.router.navigate(['illnesses', clickedIllness.$key]);
  };
}
