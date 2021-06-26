import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.page.html',
  styleUrls: ['./choose-category.page.scss'],
})
export class ChooseCategoryPage implements OnInit {
  opt: any;

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.opt = this.activatedRoute.snapshot.paramMap.get('opt');
    console.log(this.opt);
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }
}
