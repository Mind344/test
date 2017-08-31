import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // splash = true;
  // tabBarElement: any;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = PaymentPage;
  tab4Root = ContactPage;

  constructor(public navCtrl: NavController) {
    // this.tabBarElement = document.querySelector(".tabbar");
}
  // ionViewDidload(){
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 4000);
  // }
}
