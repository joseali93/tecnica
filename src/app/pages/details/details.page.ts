import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item: any;
  categories: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private modalController: ModalController,

  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state;
        this.getBrand(this.item);
      }
    });
  }

  ngOnInit() {
    console.log(this.item);


  }
  getBrand(item) {
    this.authService.getbrands(item.item.id).subscribe(
      (response) => {
        console.log('response ', response);
        this.categories = response.response;
      }, (error) => {
        console.log('error', error);

      }
    );

  }
  itemSelected(item) {
    console.log(item);
  }

  async createitem() {
    const registerModal = await this.modalController.create({
      component: CreatePage,
      componentProps: {
        item: String(this.item.item.id),
      }
    });
    return await registerModal.present();
  }
  uptadeItem(item) {
    console.log("item", item);

  }
}
