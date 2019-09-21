import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;
  brands: any;
  constructor(private menu: MenuController,
    private authService: AuthService,
    private route: Router) {
    this.menu.enable(true);
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    console.log("entro al dash");
    this.getBrands()
    // this.authService.user().subscribe(
    //   user => {
    //     this.user = user;
    //   }
    // );
  }
  getBrands() {
    this.brands = JSON.parse(localStorage.getItem('brands'));
    console.log('bandas.>', this.brands);

  }
  itemSelected(item) {
    console.log(item);
    let navigationExtras: NavigationExtras = {
      state: {
        item
      }
    };
    // this.route.navigateByUrl('')
    this.route.navigate(['details'], navigationExtras);

    // this.route.navigate(['details/', item]);

  }
}
