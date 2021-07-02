import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-category-setup',
  templateUrl: './category-setup.page.html',
  styleUrls: ['./category-setup.page.scss'],
})
export class CategorySetupPage implements OnInit {
  opt: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public LocalManagmentService: LocalManagmentService
  ) {}

  ngOnInit() {
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    console.log(this.opt);
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }
}
