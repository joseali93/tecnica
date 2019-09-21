import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
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
  create(form: NgForm) {
    const obj = {
      label: form.value.name,
      picture: "http://54.175.223.32/cotizador/backend/storage/app/categories/cYAwQszq6wcOlZfUPkP7mLQSXEZpbcjxOPW8wb46.png",
    }
    console.log(obj);
    this.authService.createBrand(this.params, obj).subscribe(
      data => {
        console.log(data);
        this.alertService.presentToast("create ok");
        this.dismissLogin();

      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        // this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
  dismissLogin() {
    this.modalController.dismiss();
  }

}
