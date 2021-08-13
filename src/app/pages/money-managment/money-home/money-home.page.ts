import { Component, OnInit } from '@angular/core';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-money-home',
  templateUrl: './money-home.page.html',
  styleUrls: ['./money-home.page.scss'],
})
export class MoneyHomePage implements OnInit {
  transactionList: any;
  constructor(private service: LocalManagmentService) {}

  ngOnInit() {
    this.transactionList = this.service.getTransactions();
    console.log(this.transactionList);
  }
}
