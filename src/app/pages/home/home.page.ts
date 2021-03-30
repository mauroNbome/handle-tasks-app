import { Component, OnInit } from '@angular/core';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  converted_image: any;

  constructor(private ActionSheetController: ActionSheetController) {}

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

    base64 = result.base64String;

    this.converted_image = 'data:image/jpeg;base64,' + base64;
  }
}
