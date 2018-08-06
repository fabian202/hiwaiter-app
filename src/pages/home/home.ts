import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanned: boolean = false;

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.get('scanned').then((val) => {
      console.log(val);
      this.scanned = val;
    });
  }

}
