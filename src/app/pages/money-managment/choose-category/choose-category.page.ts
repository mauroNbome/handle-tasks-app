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
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    console.log(this.opt);
    this.currentCategory = {
      key: 'supermercado',
      value: {
        label: this.LocalManagmentService.categorias.comida.label,
        subcategories:
          this.LocalManagmentService.categorias.supermercado.subcategories,
        icon: 'pizza',
      },
    };

    console.log(this.currentCategory);
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }

  selectCategory(item) {
    if (item !== this.currentCategory) {
      this.currentSubcategory = null;
      if (this.LocalManagmentService.newTransaction.subcategory) {
        this.LocalManagmentService.newTransaction.subcategory = '';
      }
    }

    this.currentCategory = item;

    this.LocalManagmentService.newTransaction.main_category = item.key;
  }

  subcategoryChange() {
    this.LocalManagmentService.newTransaction.subcategory =
      this.currentSubcategory;
  }

  goToCategoryManagment() {
    this.router.navigate(['money-home', this.opt, 'category-setup']);
  }

  continue() {
    console.log(this.LocalManagmentService.newTransaction);
  }
}
