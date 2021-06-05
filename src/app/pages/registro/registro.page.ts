import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ActionSheetController } from '@ionic/angular';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formController: FormGroup;
  countries: any[];
  fieldTextType: boolean = false;

  converted_image: any;

  constructor(
    private fb: FormBuilder,

    private ActionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  //subir imagen
  async addImage() {
    const actionSheet = await this.ActionSheetController.create({
      header: 'Elija una opción',
      buttons: [
        {
          text: 'Galería',
          handler: () => {
            this.selectOrtakePicture(CameraSource.Photos);
          },
        },
        {
          text: 'Cámara',
          handler: () => {
            this.selectOrtakePicture(CameraSource.Camera);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'editionIcon',
        },
      ],
    });
    await actionSheet.present();
  }

  async selectOrtakePicture(source) {
    // Variable para almacenar base64string generado por el plugin.
    let base64;
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: false,
      // source: CameraSource.Camera,
      source: source,
      resultType: CameraResultType.Base64,
    });

    // this.image = this._domSanitizer.bypassSecurityTrustResourceUrl(
    //   result && result.dataUrl
    // );
    base64 = result.base64String;

    this.converted_image = 'data:image/jpeg;base64,' + base64;
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
    this.formController = this.fb.group({
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
    });
  }
}
