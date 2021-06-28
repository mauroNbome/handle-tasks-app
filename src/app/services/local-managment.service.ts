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

  categorias = {
    supermercado: {
      label: 'Supermercado',
      icon: 'cart-outline',
      subcategories: [
        { id: 0, label: 'Compra mensual' },
        { id: 1, label: 'Compra casual' },
      ],
    },
    comida: {
      label: 'Comida',
      icon: 'pizza',
      subcategories: [
        { id: 0, label: 'Comida callejera' },
        { id: 1, label: 'Restaurante' },
      ],
    },
    vehiculo: {
      label: 'Vehiculo',
      icon: 'car',
      subcategories: [
        { id: 0, label: 'Nafta' },
        { id: 1, label: 'Patente' },
        { id: 2, label: 'Seguro' },
        { id: 3, label: 'Gastos mecánicos' },
      ],
    },
    deportes: {
      label: 'Deportes',
      icon: 'basketball',
      subcategories: [
        { id: 0, label: 'Gimnasio' },
        { id: 1, label: 'Yoga' },
      ],
    },

    ropa: {
      label: 'Ropa',
      icon: 'shirt',
      subcategories: [{ id: 0, label: 'Compra' }],
    },

    educacion: {
      label: 'Educación',
      icon: 'book',
      subcategories: [
        { id: 0, label: 'Libros' },
        { id: 1, label: 'Cursos' },
        { id: 2, label: 'Seminarios' },
      ],
    },

    regalos: {
      label: 'Regalos',
      icon: 'gift',
      subcategories: [
        { id: 0, label: 'Para otros' },
        { id: 1, label: 'Para mi' },
      ],
    },
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
