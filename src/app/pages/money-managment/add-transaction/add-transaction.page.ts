import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage implements OnInit {
  balance: any;

  constructor() {}

  ngOnInit() {
    this.balance = 8300;
  }

  // Método que se ejecuta desde el keyboard al accionar un botón. Recibe un value
  public changeBalance(buttonValue: any) {
    if (buttonValue === 'backspace') {
      this.balance = 0;
    } else {
      if (this.balance === 0) {
        this.balance = buttonValue;
      } else {
        this.balance = String(this.balance) + String(buttonValue);
      }
    }
  }

  // TODO: Create pipe to change the display of the balance.

  // TODO: keep testing the changeBalance method.

  // TODO: add labels to the header of the page, for sure, depending on if you're on add founds or add spending.
}
