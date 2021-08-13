import { Component, OnInit } from '@angular/core';
import { LocalManagmentService } from '../../../services/local-managment.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category-setup-individual',
  templateUrl: './category-setup-individual-add.page.html',
  styleUrls: ['./category-setup-individual-add.page.scss'],
})
export class CategorySetupIndividualAddPage implements OnInit {
  currentCategory: any;

  activeIcon: any;

  constructor(
    public LocalManagmentService: LocalManagmentService,
    private navController: NavController
  ) {}

  ngOnInit() {
    console.log(this.LocalManagmentService.currentCategoryToEdit);
    this.currentCategory = {
      ...this.LocalManagmentService.currentCategoryToEdit,
    };
    // Set up first icon.
    this.activeIcon = this.currentCategory.icon;
  }

  selectIcon(item) {
    this.activeIcon = item.value;
    this.currentCategory.icon = item.value;
    console.log(item);
  }

  addSubcategory() {
    this.currentCategory.subcategories.push({
      id: this.currentCategory.subcategories.length
        ? this.currentCategory.subcategories.length
        : 0,
      label: '',
    });

    console.log(this.currentCategory.subcategories);
  }

  removeSubcategory(index) {
    this.currentCategory.subcategories.splice(index, 1);
    console.log('subcategory removed');
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }

  getIcons() {
    if (this.LocalManagmentService.newTransaction.type === 'add-spending') {
      return this.LocalManagmentService.iconsSpending;
    } else {
      return this.LocalManagmentService.iconsAddFound;
    }
  }

  saveData() {
    this.LocalManagmentService.spendingCategories;
    console.log(this.currentCategory);

    // * ADD-SPENDING CASE:
    if (this.LocalManagmentService.newTransaction.type === 'add-spending') {
      this.LocalManagmentService.spendingCategories.forEach((cat, i) => {
        if (cat.id === this.currentCategory.id) {
          this.LocalManagmentService.spendingCategories[i] =
            this.currentCategory;
        }
      });

      this.LocalManagmentService.saveSpendCategories();
    } else {
      this.LocalManagmentService.addFoundsCategories.forEach((cat, i) => {
        if (cat.id === this.currentCategory.id) {
          this.LocalManagmentService.addFoundsCategories[i] =
            this.currentCategory;
        }
      });

      this.LocalManagmentService.saveAddFoundsCategories();
    }

    this.navController.back();
  }
}
