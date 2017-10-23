import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToProfile() {
    this.navCtrl.setRoot(ProfilePage)
  }

  goToSignUp() {
    this.navCtrl.setRoot(SignupPage)
  }

}
