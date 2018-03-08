import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database-deprecated";
import {AngularFireDatabase} from "angularfire2/database";

const config = {
  apiKey: "AIzaSyBRM0ki-337TfZtCgqc22rqQyH04KfCZTA",
  authDomain: "tp-firebase-deef8.firebaseapp.com",
  databaseURL: "https://tp-firebase-deef8.firebaseio.com",
  projectId: "tp-firebase-deef8",
  storageBucket: "tp-firebase-deef8.appspot.com",
  messagingSenderId: "755828135654"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
