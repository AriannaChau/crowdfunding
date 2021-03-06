import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FundingListComponent } from './funding-list/funding-list.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IllnessDetailComponent } from './illness-detail/illness-detail.component';
import { AdminComponent } from './admin/admin.component';
import { NewCauseComponent } from './new-cause/new-cause.component';
import { EditCauseComponent } from './edit-cause/edit-cause.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    FundingListComponent,
    IllnessDetailComponent,
    AdminComponent,
    NewCauseComponent,
    EditCauseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
