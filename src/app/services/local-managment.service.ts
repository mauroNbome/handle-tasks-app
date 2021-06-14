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
}
