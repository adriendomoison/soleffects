import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-moodtracker',
  templateUrl: 'moodtracker.html',
})
export class MoodtrackerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodtrackerPage');
  }

  submitMood() {
    this.navCtrl.pop()
  }
}
