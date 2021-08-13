import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';

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
    public LocalManagmentService: LocalManagmentService
  ) {}

  ngOnInit() {
    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    this.currentCategory = this.LocalManagmentService.spendingCategories[0];
  }

  ionViewWillEnter() {
    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    this.currentCategory = this.LocalManagmentService.spendingCategories[0];
    this.LocalManagmentService.newTransaction.main_category =
      this.currentCategory.label;
    this.LocalManagmentService.newTransaction.icon = this.currentCategory.icon;

    console.log(this.currentCategory);
  }

  selectCategory(item) {
    if (item !== this.currentCategory) {
      this.currentSubcategory = null;
      if (this.LocalManagmentService.newTransaction.subcategory) {
        this.LocalManagmentService.newTransaction.subcategory = '';
      }
    }

    this.currentCategory = item;

    this.LocalManagmentService.newTransaction.main_category = item.label;
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
    console.log(this.LocalManagmentService.newTransaction);
    this.router.navigate([
      'money-home',
      'add-transaction',
      this.opt,
      'transaction-data',
    ]);
  }
}
