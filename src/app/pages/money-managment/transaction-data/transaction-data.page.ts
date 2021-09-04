import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';
import { NavController } from '@ionic/angular';

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
    public service: LocalManagmentService,
    private router: Router,
    private NavController: NavController
  ) {}

  // Variable que almacena la categoría actual, lo utilizamos para setear las subcategories, y mostra estilo active.

  concept: any = '';

  ngOnInit() {
    if (this.service.newTransaction === null) {
      this.NavController.back();
      return;
    }
    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');
    this.amount = this.service.newTransaction.amount;
  }

  ionViewWillEnter() {
    if (this.service.newTransaction === null) {
      this.NavController.back();
      return;
    }

    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');
    this.amount = this.service.newTransaction.amount;
  }

  saveData() {
    this.service.newTransaction.concept = this.concept;

    console.log(this.service.newTransaction);
    // Saving to LS.

    this.service.saveTransactionList(this.service.newTransaction);

    // Modifying LS balance.
    let currentBalance = this.service.getBalanceFromLS();
    if (!currentBalance) {
      if (this.service.newTransaction.type === 'add-spending') {
        this.service.saveNewBalance(`-${this.service.newTransaction.amount}`);
      } else {
        this.service.saveNewBalance(this.service.newTransaction.amount);
      }
    } else {
      if (this.service.newTransaction.type === 'add-spending') {
        let result =
          Number(currentBalance) - Number(this.service.newTransaction.amount);

        this.service.saveNewBalance(result);
      } else {
        let result =
          Number(currentBalance) + Number(this.service.newTransaction.amount);

        this.service.saveNewBalance(result);
      }
    }

    // Setting variable to null.
    this.service.newTransaction = null;

    // Going back.
    this.NavController.back();
  }

  // Formating $$
  // https://stackoverflow.com/questions/36177388/space-separator-instead-of-a-comma-large-number-outputs
}
