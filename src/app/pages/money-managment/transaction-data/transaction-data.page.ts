import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-transaction-data',
  templateUrl: './transaction-data.page.html',
  styleUrls: ['./transaction-data.page.scss'],
})
export class TransactionDataPage implements OnInit {
  opt: any;
  amount: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private LocalManagmentService: LocalManagmentService
  ) {}

  ngOnInit() {
    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');

    this.amount = this.LocalManagmentService.newTransaction.amount;

    console.log(this.LocalManagmentService.newTransaction);
  }

  // Formating $$
  // https://stackoverflow.com/questions/36177388/space-separator-instead-of-a-comma-large-number-outputs
}
