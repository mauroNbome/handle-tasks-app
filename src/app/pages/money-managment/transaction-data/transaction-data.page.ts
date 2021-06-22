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

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
    spaceBetween: 0,
    slidesPerGroup: 1,
  };

  // Variable que almacena la categoría actual, lo utilizamos para setear las subcategories, y mostra estilo active.
  currentCategory: any;

  currentSubcategory: any;

  concept: any = '';

  categorias = {
    supermercado: {
      label: 'Supermercado',
      subcategories: [
        { id: 0, label: 'Compra mensual', value: 'compra_mensual' },
        { id: 1, label: 'Compra casual', value: 'compra_casual' },
      ],
    },
    comida: {
      label: 'Comida',
      subcategories: [
        { id: 0, label: 'Comida callejera', value: 'comida_callejera' },
        { id: 1, label: 'Restaurante', value: 'restaurante' },
      ],
    },
    vehiculo: {
      label: 'Vehiculo',
      subcategories: [
        { id: 0, label: 'Nafta', value: 'nafta' },
        { id: 1, label: 'Patente', value: 'patente' },
        { id: 2, label: 'Seguro', value: 'seguro' },
        { id: 3, label: 'Gastos mecánicos', value: 'mechanical_spending' },
      ],
    },
    deportes: {
      label: 'Deportes',
      subcategories: [
        { id: 0, label: 'Gimnasio', value: 'gimnasio' },
        { id: 1, label: 'Yoga', value: 'yoga' },
      ],
    },

    ropa: {
      label: 'Ropa',
      subcategories: [{ id: 0, label: 'Compra', value: 'compra_ropa' }],
    },

    educacion: {
      label: 'Educación',
      subcategories: [
        { id: 0, label: 'Libros', value: 'libros' },
        { id: 1, label: 'Cursos', value: 'cursos' },
        { id: 2, label: 'Seminarios', value: 'seminarios' },
      ],
    },

    regalos: {
      label: 'Regalos',
      subcategories: [
        { id: 0, label: 'Para otros', value: 'giveaway' },
        { id: 1, label: 'Para mi', value: 'self_gift' },
      ],
    },
  };

  ngOnInit() {
    this.opt = this.activatedRouter.snapshot.paramMap.get('opt');
    this.amount = this.LocalManagmentService.newTransaction.amount;
    this.setUpCatAndSubCategory();
  }

  setUpCatAndSubCategory() {
    this.currentCategory = this.categorias['supermercado'];
    this.currentCategory.key = 'supermercado';
    this.currentSubcategory = this.currentCategory.subcategories[0].value;

    console.log(this.currentCategory);
  }

  changeCategory(cat) {
    console.log(cat);
    this.currentCategory = cat;
    this.currentSubcategory = cat.value.subcategories[0].value;
  }

  changeSubcategory(item) {
    console.log(item);
    this.currentSubcategory = item;
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }

  getSubcategories() {
    if (this.currentCategory.subcategories) {
      return this.currentCategory.subcategories;
    } else {
      return this.currentCategory.value.subcategories;
    }
  }

  saveData() {
    // Adding the data of this page.
    this.LocalManagmentService.newTransaction.main_category =
      this.currentCategory.key;
    this.LocalManagmentService.newTransaction.subcategory =
      this.currentSubcategory;
    this.LocalManagmentService.newTransaction.concept = this.concept;

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
