import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';
import { GalleryPage } from '../gallery/gallery';
import { MapPage } from '../map/map';
import { RentalPage } from '../rental/rental';
import { PaymentPage } from '../payment/payment';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public app: App) {
    // private alertCtrl: AlertController
    this.tabBarElement = document.querySelector(".tabbar");
  }
  profilefn() {
    this.navCtrl.push(ProfilePage);
  }
  aboutfn() {
    this.navCtrl.push(AboutPage);
  }
  galleryfn() {
    this.navCtrl.push(GalleryPage);
  }
  mapfn() {
    this.navCtrl.push(MapPage);
  }
  rentalfn() {
    this.navCtrl.push(RentalPage);
  }
  paymentfn() {
    this.navCtrl.push(PaymentPage);
  }
  loginfn() {
    let LoginModal = this.modalCtrl.create(LoginPage, { userId: 8675309 });
    LoginModal.present();
  }

  logoutfn(){ 
    const root = this.app.getRootNav();
  root.popToRoot();
  }

  Notification() {

  }


  // ionViewDidload(){
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 3000);
  // }

}
