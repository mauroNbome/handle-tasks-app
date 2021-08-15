import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LocalManagmentService {
  // Categoría para editar en la vista
  // money-home/add-founds/category-setup-individual
  currentCategoryToEdit: any;

  newTransaction = {
    id: '',
    amount: 0,
    type: '',
    main_category: '',
    subcategory: '',
    icon: '',
    concept: '',
    date: new Date(),
  };

  addFoundsCategories = [
    {
      id: 0,
      label: 'Salary',
      icon: 'cart',
      subcategories: [
        { id: 0, label: 'Syloper' },
        { id: 1, label: 'Working schedulle hours' },
      ],
    },
    {
      id: 1,
      label: 'Commission',
      icon: 'pizza',
      subcategories: [
        { id: 0, label: 'Fullfillment tasks' },
        { id: 1, label: 'book sales' },
      ],
    },
    {
      id: 2,
      label: 'Interest',
      icon: 'car',
      subcategories: [{ id: 0, label: 'Plazo fijo' }],
    },
    {
      id: 3,
      label: 'Investments',
      icon: 'basketball',
      subcategories: [
        { id: 0, label: 'Mineria' },
        { id: 1, label: 'AXS income' },
      ],
    },
    {
      id: 4,
      label: 'Gifts',
      icon: 'shirt',
      subcategories: [{ id: 0, label: 'Received money' }],
    },
    {
      id: 5,
      label: 'Educación',
      icon: 'book',
      subcategories: [
        { id: 0, label: 'Libros' },
        { id: 1, label: 'Cursos' },
        { id: 2, label: 'Seminarios' },
      ],
    },
    {
      id: 6,
      label: 'Regalos',
      icon: 'gift',
      subcategories: [
        { id: 0, label: 'Para otros' },
        { id: 1, label: 'Para mi' },
      ],
    },
  ];

  spendingCategories = [
    {
      id: 0,
      label: 'Supermercado',
      icon: 'cart',
      subcategories: [
        { id: 0, label: 'Compra mensual' },
        { id: 1, label: 'Compra casual' },
      ],
    },
    {
      id: 1,
      label: 'Comida',
      icon: 'pizza',
      subcategories: [
        { id: 0, label: 'Comida callejera' },
        { id: 1, label: 'Restaurante' },
      ],
    },
    {
      id: 2,
      label: 'Vehiculo',
      icon: 'car',
      subcategories: [
        { id: 0, label: 'Nafta' },
        { id: 1, label: 'Patente' },
        { id: 2, label: 'Seguro' },
        { id: 3, label: 'Gastos mecánicos' },
      ],
    },
    {
      id: 3,
      label: 'Deportes',
      icon: 'basketball',
      subcategories: [
        { id: 0, label: 'Gimnasio' },
        { id: 1, label: 'Yoga' },
      ],
    },
    {
      id: 4,
      label: 'Ropa',
      icon: 'shirt',
      subcategories: [{ id: 0, label: 'Compra' }],
    },
    {
      id: 5,
      label: 'Educación',
      icon: 'book',
      subcategories: [
        { id: 0, label: 'Libros' },
        { id: 1, label: 'Cursos' },
        { id: 2, label: 'Seminarios' },
      ],
    },
    {
      id: 6,
      label: 'Regalos',
      icon: 'gift',
      subcategories: [
        { id: 0, label: 'Para otros' },
        { id: 1, label: 'Para mi' },
      ],
    },
  ];

  iconsSpending = {
    plane: 'airplane',
    amaricanFotball: 'american-football',
    baseball: 'basketball',
    shirt: 'shirt',
    bag: 'bag',
    balloon: 'balloon',
    bandage: 'bandage',
    barbell: 'barbell',
    beer: 'beer',
    wine: 'wine',
    bicycle: 'bicycle',
    book: 'book',
    brush: 'brush',
    home: 'home',
    restaurante: 'restaurant',
    build: 'build',
    bulb: 'bulb',
    transport: 'bus',
    cafe: 'cafe',
    car: 'car',
    creditCard: 'card',
    cart: 'cart',
    dice: 'dice',
    earth: 'earth',
    fastFood: 'fast-food',
    film: 'film',
    joystick: 'game-controller',
    paw: 'paw',
    musicNote: 'musical-notes',
    iceCream: 'ice-cream',
    pizza: 'pizza',
    gift: 'gift',
    call: 'call',
  };

  iconsAddFound = {
    cash: 'cash',
    car: 'car',
    gift: 'gift',
    book: 'book',
    home: 'home',
    build: 'build',
    bulb: 'bulb',
    analytics: 'analytics',
    code: 'code-slash',
    globe: 'globe',
    magnet: 'magnet',
    share_social: 'share-social',
    trending_up: 'trending-up',
    wallet: 'wallet',
    add_circle: 'add-circle',
    glasses: 'glasses',
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

  getBalanceFromLS() {
    return localStorage.getItem('balance');
  }

  saveNewBalance(balance) {
    localStorage.setItem('balance', balance);
  }

  setupStoredData() {
    if (this.getSpendCategories()) {
      this.spendingCategories = this.getSpendCategories();
    }

    if (this.getAddFoundsCategories()) {
      this.addFoundsCategories = this.getAddFoundsCategories();
    }
  }

  // * Spending LS related methods:
  saveSpendCategories() {
    localStorage.setItem(
      'spending_categories',
      JSON.stringify(this.spendingCategories)
    );
  }

  getSpendCategories() {
    return JSON.parse(localStorage.getItem('spending_categories'));
  }

  // * Add-Founds LS related methods:
  saveAddFoundsCategories() {
    localStorage.setItem(
      'add_founds_categories',
      JSON.stringify(this.addFoundsCategories)
    );
  }

  getAddFoundsCategories() {
    return JSON.parse(localStorage.getItem('add_founds_categories'));
  }
}
