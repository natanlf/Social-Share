import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }

  share(){
    this.socialSharing.shareViaWhatsApp("Ola", null, null)
  }

}
