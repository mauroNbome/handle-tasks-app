import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.page.html',
  styleUrls: ['./choose-category.page.scss'],
})
export class ChooseCategoryPage implements OnInit {
  opt: any;

  currentCategory: any;

  currentSubcategory: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public LocalManagmentService: LocalManagmentService,
    private NavController: NavController
  ) {}

  ngOnInit() {
    if (this.LocalManagmentService.newTransaction === null) {
      this.NavController.back();
      return;
    }

    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    this.currentCategory = this.LocalManagmentService.spendingCategories[0];
  }

  ionViewWillEnter() {
    if (this.LocalManagmentService.newTransaction === null) {
      this.NavController.back();
      return;
    }

    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    this.currentCategory = this.LocalManagmentService.spendingCategories[0];
    this.LocalManagmentService.newTransaction.main_category =
      this.currentCategory.label;
    this.LocalManagmentService.newTransaction.icon = this.currentCategory.icon;
  }

  selectCategory(item) {
    if (item !== this.currentCategory) {
      this.currentSubcategory = '';
      if (this.LocalManagmentService.newTransaction.subcategory) {
        this.LocalManagmentService.newTransaction.subcategory = '';
      }
    }

    this.currentCategory = item;

    // setting up data in the newTransaction object.
    this.LocalManagmentService.newTransaction.main_category = item.label;
    this.LocalManagmentService.newTransaction.icon = item.icon;
  }

  subcategoryChange() {
    this.LocalManagmentService.newTransaction.subcategory =
      this.currentSubcategory;
  }

  goToCategoryManagment() {
    this.router.navigate(['money-home', this.opt, 'category-setup']);
  }

  setupCategories() {
    if (this.LocalManagmentService.newTransaction.type === 'add-founds') {
      return this.LocalManagmentService.addFoundsCategories;
    } else {
      return this.LocalManagmentService.spendingCategories;
    }
  }

  continue() {
    console.log(this.LocalManagmentService.newTransaction.subcategory);
    if (
      this.LocalManagmentService.newTransaction.subcategory === '' ||
      null ||
      undefined
    ) {
      this.LocalManagmentService.presentToastError(
        'Make sure to add a subcategory before continue!'
      );
      return;
    }

    this.router.navigate([
      'money-home',
      'add-transaction',
      this.opt,
      'transaction-data',
    ]);
  }
}
