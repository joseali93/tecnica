import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }
  ngOnInit() {
  }
  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }

  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  register(form: NgForm) {
    this.authService.remember(form.value.email).subscribe(
      data => {
        // this.authService.login(form.value.email, form.value.password).subscribe(
        //   data => {
        //   },
        //   error => {
        //     console.log(error);
        //   },
        //   () => {
        //     this.dismissRegister();
        //     this.navCtrl.navigateRoot('/landing');
        //   }
        // );
        this.alertService.presentToast('revisa tu bandeja de entrada');
      },
      error => {
        console.log(error);
        this.alertService.presentToast(error.error.type);

      },
      () => {

      }
    );
  }
}
