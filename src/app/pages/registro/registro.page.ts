import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorsService } from '../../services/validator.service';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formController: FormGroup;
  countries: any[];
  fieldTextType: boolean = false;

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorsService,
    private paises: PaisesService
  ) {}

  ngOnInit() {
    this.crearFormulario();
    this.paises.getPaises().subscribe((paises) => {
      this.countries = paises;

      this.countries.unshift({
        nombre: 'Seleccione un pais',
        code: '',
      });

      console.log(this.countries);
    });
  }

  // Getter function, retorna true o false, y puede usarse para validaciones en el HTML.
  get nombreNoValido() {
    return (
      this.formController.get('nombre').invalid &&
      this.formController.get('nombre').touched
    );
  }
  get apellidoNoValido() {
    return (
      this.formController.get('apellido').invalid &&
      this.formController.get('apellido').touched
    );
  }

  get emailNoValido() {
    return (
      this.formController.get('email').invalid &&
      this.formController.get('email').touched
    );
  }

  get email2NoValido() {
    const email = this.formController.get('email').value;
    const email2 = this.formController.get('email2').value;

    return email === email2 ? false : true;
  }

  get passwordNoValido() {
    return (
      this.formController.get('password').invalid &&
      this.formController.get('password').touched
    );
  }

  get fnacNoValido() {
    return (
      this.formController.get('fnac').invalid &&
      this.formController.get('fnac').touched
    );
  }

  get nacionalidadNoValido() {
    return (
      this.formController.get('nacionalidad').invalid &&
      this.formController.get('nacionalidad').touched
    );
  }

  get docNoValido() {
    return (
      this.formController.get('docNro').invalid &&
      this.formController.get('docNro').touched
    );
  }

  get celularNoValido() {
    return (
      this.formController.get('celular').invalid &&
      this.formController.get('celular').touched
    );
  }

  crearFormulario() {
    this.formController = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        email2: ['', Validators.required],
        password: ['', Validators.required],
        fnac: ['', Validators.required],
        sexo: ['masculino', Validators.required],
        nacionalidad: ['', Validators.required],
        docType: ['dni', Validators.required],
        docNro: ['', Validators.required],
        celular: ['', Validators.required],
      },
      {
        validators: this.validator.emailMatch('email', 'email2'),
      }
    );
  }

  guardar() {
    // if (this.forma.invalid) {
    //   Object.values(this.forma.controls).forEach((control) => {
    //     if (control instanceof FormGroup) {
    //       Object.values(control.controls).forEach((control) =>
    //         control.markAsTouched()
    //       );
    //     } else {
    //       control.markAsTouched();
    //     }
    //   });
    // }
    console.log('Form enviado exitosamente', this.formController.value);
  }
}
