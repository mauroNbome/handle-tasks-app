import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-category-setup',
  templateUrl: './category-setup.page.html',
  styleUrls: ['./category-setup.page.scss'],
})
export class CategorySetupPage implements OnInit {
  opt: any;
  search: any;

  currentCategoriesOnView: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public LocalManagmentService: LocalManagmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setupCategoryList();
    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
  }

  ionViewWillEnter() {
    this.setupCategoryList();
    this.LocalManagmentService.setupStoredData();
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
  }

  editCategory(item) {
    this.LocalManagmentService.currentCategoryToEdit = item;
    this.router.navigate(['money-home', this.opt, 'category-setup-individual']);
  }

  filterCategories(event) {
    if (this.LocalManagmentService.newTransaction.type === 'add-spending') {
      if (event === '') {
        this.currentCategoriesOnView =
          this.LocalManagmentService.spendingCategories;
      } else {
        this.currentCategoriesOnView = this.currentCategoriesOnView.filter(
          (cat) => cat.label.toLowerCase().includes(event.toLowerCase())
        );
      }
    } else {
      if (event === '') {
        this.currentCategoriesOnView =
          this.LocalManagmentService.addFoundsCategories;
      } else {
        this.currentCategoriesOnView = this.currentCategoriesOnView.filter(
          (cat) => cat.label.toLowerCase().includes(event.toLowerCase())
        );
      }
    }
  }

  setupCategoryList() {
    if (this.LocalManagmentService.newTransaction.type === 'add-founds') {
      this.currentCategoriesOnView =
        this.LocalManagmentService.addFoundsCategories;
    } else {
      this.currentCategoriesOnView =
        this.LocalManagmentService.spendingCategories;
    }
  }
}
