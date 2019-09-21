import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  params: any

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.params = this.navParams.get('item');

    console.log(this.params);
  }
  dismissLogin() {
    this.modalController.dismiss();
  }
  update(form: NgForm) {
    const obj = {
      label: form.value.name,
    }
    console.log(obj);
    this.authService.updateBrand(this.params, obj).subscribe(
      data => {
        console.log(data);
        this.alertService.presentToast("update ok");
        this.dismissLogin();

      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
      }
    );
  }
}
