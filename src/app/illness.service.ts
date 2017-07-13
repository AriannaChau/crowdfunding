import { Injectable } from '@angular/core';
import { Illness } from './illness.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class IllnessService {
  illnesses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.illnesses = database.list('illness');
  }

  getIllnesses(){
      return this.illnesses;
    }

  addIllness(newCause: Illness) {
    this.illnesses.push(newCause);
  }

  getIllnessById(illnessId: string){
    return this.database.object('illness/' + illnessId);
  }

  updateCause(localUpdatedCause){
  var illnessEntryInFirebase = this.getIllnessById(localUpdatedCause.$key);
  illnessEntryInFirebase.update({title: localUpdatedCause.title,
                              name: localUpdatedCause.name,
                              goal: localUpdatedCause.goal,
                              description: localUpdatedCause.description});
  }

  deleteCause(localCauseToDelete){
    var illnessEntryInFirebase = this.getIllnessById(localCauseToDelete.$key);
    illnessEntryInFirebase.remove();
  }
}
