import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExperiencePage} from '../experience/experience';
import {MoodtrackerPage} from '../moodtracker/moodtracker';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  gotoExperiences() {
    this.navCtrl.push(ExperiencePage)
  }

  goToMoodTracker() {
    this.navCtrl.push(MoodtrackerPage)
  }

}
