import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipient: string;
  subject: string;
  message: string;

  constructor(public navCtrl: NavController, public emailComposer: EmailComposer) {  }

  send() {
    let email = {
      recipient: this.recipient,
      subject: this.subject,
      message: this.message,
      isHtml: false,
      app: "Gmail"
    }

    this.emailComposer.open(email);

  }

}
