import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LocalManagmentService {
  newTransaction = {
    id: '',
    amount: 0,
    type: '',
    main_category: '',
    subcategory: '',
    concept: '',
    date: new Date(),
  };

  constructor(private toastController: ToastController) {}

  createDateStamp(currentDate) {
    let newDate = new Date(currentDate);
    let date = `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    return date;
  }

  createRandomID() {
    return String(new Date().valueOf());
  }

  //Alertas
  async presentToastError(msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      color: 'danger',
      cssClass: 'toastError',
    });
    toast.present();
  }

  async presentToastSuccess(msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  saveTransactionList(data) {
    let transactionList = this.getTransactions();

    if (transactionList !== null) {
      transactionList.push(data);
    } else {
      transactionList = [data];
    }

    localStorage.setItem('transactions', JSON.stringify(transactionList));
  }

  getTransactions() {
    return JSON.parse(localStorage.getItem('transactions'));
  }
}
