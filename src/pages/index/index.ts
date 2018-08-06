import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  loggedIn : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private storage: Storage, public loadingCtrl: LoadingController) {
    this.menu.enable(false);
    storage.ready().then(() => {
      storage.get('loggedIn').then((val) => {
        if(val) {
          this.menu.enable(true);
          this.goToApp();
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  login() {
    this.storage.set('scanned', false);
    this.navCtrl.push('LoginPage');
  }

  goToApp() {
    this.menu.enable(true);
    console.log('loginsini');
    this.loggedIn = true;
    this.storage.set('loggedIn', this.loggedIn);

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot('TabsPage');
      loading.dismiss();
    }, 1000);
  }

  scanCode() {
    console.log('Scan qr');
    this.storage.set('scanned', true);
    console.log('setting true');
    this.goToApp();
  }

  viewRestaurants() {
    this.navCtrl.push('RestaurantsViewPage');
  }

}
