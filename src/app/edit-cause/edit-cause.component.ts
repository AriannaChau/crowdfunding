import { Component, OnInit, Input } from '@angular/core';
import { Illness } from '../illness.model';
import { IllnessService } from '../illness.service';

@Component({
  selector: 'app-edit-cause',
  templateUrl: './edit-cause.component.html',
  styleUrls: ['./edit-cause.component.scss'],
  providers: [IllnessService]
})
export class EditCauseComponent implements OnInit {
  @Input() selectedCause;

  constructor(private illnessService: IllnessService) { }

  ngOnInit() {
  }

  beginUpdatingCause(causeToUpdate){
    this.illnessService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
    if(confirm("Are you sure you want to delete this cause?")){
      this.illnessService.deleteCause(causeToDelete);
    }
  }

}
