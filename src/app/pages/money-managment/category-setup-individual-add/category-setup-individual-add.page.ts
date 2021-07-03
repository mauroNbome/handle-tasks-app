import { Component, OnInit } from '@angular/core';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-category-setup-individual',
  templateUrl: './category-setup-individual-add.page.html',
  styleUrls: ['./category-setup-individual-add.page.scss'],
})
export class CategorySetupIndividualAddPage implements OnInit {
  currentCategory: any;

  constructor(public LocalManagmentService: LocalManagmentService) {}

  ngOnInit() {
    console.log(this.LocalManagmentService.currentCategoryToEdit);
  }
}
