import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private LocalManagmentService: LocalManagmentService,
    private router: Router
  ) {}

  // Variable que almacena la categoría actual, lo utilizamos para setear las subcategories, y mostra estilo active.

  concept: any = '';

  ngOnInit() {
    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');
    this.amount = this.LocalManagmentService.newTransaction.amount;
    console.log(this.opt);
    console.log(this.amount);
  }

  saveData() {
    this.LocalManagmentService.newTransaction.concept = this.concept;

    console.log(this.LocalManagmentService.newTransaction);
    // Saving to LS.

    this.LocalManagmentService.saveTransactionList(
      this.LocalManagmentService.newTransaction
    );

    // Setting variable to null.
    this.LocalManagmentService.newTransaction = null;

    // Going back.
    this.router.navigate(['money-home']);
  }

  // Formating $$
  // https://stackoverflow.com/questions/36177388/space-separator-instead-of-a-comma-large-number-outputs
}
