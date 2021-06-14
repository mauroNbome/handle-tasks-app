import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalManagmentService } from '../../../services/local-managment.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage implements OnInit {
  balance: any;

  // Variable que se encarga de bifurcar la lógica entre add incomes / spending
  opt: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private LocalManagmentService: LocalManagmentService
  ) {
    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');
  }

  ngOnInit() {
    this.balance = 0;
    console.log(this.opt);
  }

  // Método que se ejecuta desde el keyboard al accionar un botón. Recibe un value
  public changeBalance(buttonValue: any) {
    let splittedBalance = String(this.balance).split('.');

    // If balance excedes 8 numbers.
    if (this.balance.length > 8 && buttonValue !== 'backspace') {
      console.log('reached the limit');
      return;
    }

    // Backbutton!
    if (buttonValue === 'backspace') {
      this.balance = 0;
      return;
    }

    if (splittedBalance[1] && splittedBalance[1].length > 1) {
      return;
    }

    // Retornamos si ingresamos una ',' y nuestro balance es 0.
    if (buttonValue === '.' && this.balance === 0) {
      return;
    }

    // Retornamos si intentamos poner más de una ,
    if (buttonValue === '.' && splittedBalance.length > 1) {
      return;
    }

    if (this.balance === 0) {
      this.balance = buttonValue;
    } else {
      this.balance = String(this.balance) + String(buttonValue);
    }
  }

  continueWithTransaction(balance) {
    if (balance == 0) {
      this.LocalManagmentService.presentToastError(
        "Can't create a transaction"
      );
      return;
    }

    this.LocalManagmentService.newTransaction.amount = balance;
    this.LocalManagmentService.newTransaction.type = this.opt;
    this.LocalManagmentService.newTransaction.id =
      this.LocalManagmentService.createRandomID();

    // We start the new transaction here, calling variables in the service. Redirecting to the transaction config.
    this.router.navigate([
      'money-home',
      'add-transaction',
      this.opt,
      'transaction-data',
    ]);
  }
}
