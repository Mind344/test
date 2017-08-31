import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
//import { ModalPage } from './modal-page';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rental',
  templateUrl: 'rental.html',
})
export class RentalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalPage');
  }
  // rentalList() {
  //   let modal = this.modalCtrl.create();
  //   modal.present();
  // }
 

}
