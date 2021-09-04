import { Component, OnInit } from '@angular/core';
import { LocalManagmentService } from '../../../services/local-managment.service';
import { Router } from '@angular/router';
import { transactionModel } from '../../../models/transaction.model';

@Component({
  selector: 'app-money-home',
  templateUrl: './money-home.page.html',
  styleUrls: ['./money-home.page.scss'],
})
export class MoneyHomePage implements OnInit {
  transactionList: any;
  transactionListOnView: any;
  currentBalance: string | number;

  constructor(private service: LocalManagmentService, private router: Router) {}

  ngOnInit() {
    this.transactionList = this.service.getTransactions();
    this.groupTransactionsByDate(this.transactionList);
    if (this.service.getBalanceFromLS()) {
      this.currentBalance = this.service.getBalanceFromLS();
    }
  }

  ionViewWillEnter() {
    this.transactionList = this.service.getTransactions();
    this.groupTransactionsByDate(this.transactionList);
    if (this.service.getBalanceFromLS()) {
      this.currentBalance = this.service.getBalanceFromLS();
    }
  }

  groupTransactionsByDate(data) {
    // this gives an object with dates as keys
    if (data) {
      const groups = data.reduce((groups, transaction) => {
        const date = transaction.date.split('T')[0];

        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
      }, {});

      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          transactions: groups[date],
        };
      });

      groupArrays.sort(function (a, b) {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        return date2.getTime() - date1.getTime();
      });

      groupArrays.forEach((group) => {
        group.transactions.sort(function (a, b) {
          let date1 = new Date(a.date);
          let date2 = new Date(b.date);
          return date2.getTime() - date1.getTime();
        });
      });
      this.transactionList = groupArrays;
    }
  }

  formatDate(date) {
    let splittedDate = date.split('-');
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Acá básicamente jugamos con el split del format yyyy-mm-dd.
    return `${months[Number(splittedDate[1])]} ${splittedDate[2]}, ${
      splittedDate[0]
    }`;
  }

  startTransaction(transactionType) {
    // Validating if it's the first transaction, don't make spending type.
    if (this.currentBalance === '0' && transactionType === 'add-spending') {
      this.service.presentToastError(
        'You need to add founds before add spendings!'
      );
      return;
    }

    this.service.newTransaction = {
      id: '',
      amount: 0,
      type: transactionType,
      main_category: '',
      subcategory: '',
      icon: '',
      concept: '',
      date: new Date(),
    };

    this.router.navigate(['money-home', 'add-transaction', transactionType]);
  }
}
