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

  getIllnessById(illnessId: string){
    return this.database.object('illness/' + illnessId);
  }
}
