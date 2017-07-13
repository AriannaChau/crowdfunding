import { Component, OnInit } from '@angular/core';
import { Illness } from '../illness.model';
import { IllnessService } from '../illness.service';

@Component({
  selector: 'app-new-cause',
  templateUrl: './new-cause.component.html',
  styleUrls: ['./new-cause.component.scss'],
  providers: [IllnessService]
})
export class NewCauseComponent implements OnInit {

  constructor(private illnessService: IllnessService) { }

  ngOnInit() {
    }

  submitForm(title: string, name: string, donation: number, goal: number, description: string) {
    var newCause: Illness = new Illness(title, name, donation, goal, description);
    this.illnessService.addIllness(newCause);
  }
}
