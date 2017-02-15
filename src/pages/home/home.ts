import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

// get a reference to the details page
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // PROPERTIES
  games: FirebaseListObservable<any>;

  // CONSTRUCTOR
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    af:AngularFire) {
    this.games = af.database.list('/games');
  }

  // METHODS
  addGame(){
    this.navCtrl.push(DetailsPage);
  }

  editGame() {
    this.navCtrl.push(DetailsPage);
  }

  deleteGame(game) {
    this.games.remove(game);
  }

}
