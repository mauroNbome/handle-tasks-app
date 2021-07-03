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

  constructor(
    private activatedRoute: ActivatedRoute,
    public LocalManagmentService: LocalManagmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    console.log(this.opt);
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }

  editCategory(item) {
    this.LocalManagmentService.currentCategoryToEdit = item;
    console.log(this.search);
    return;
    this.router.navigate(['money-home', this.opt, 'category-setup-individual']);
  }

  filterCategories(event) {
    // TODO: Fix violation ion-searchbar
    console.log(event);
  }
}
