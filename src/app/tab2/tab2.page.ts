import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nombre;
  apellido;
  identificacion;
  eps;
  genero
  hemoglobina;
  edad;
  tedad;


  constructor(public alertctrl: AlertController) { }

  Anemiaclick() {

    ///primera 0-1
    if ((this.tedad == "Meses" && this.hemoglobina < 13) && (this.edad == 0 || this.edad == 1 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    } else
    
    if ((this.tedad == "Meses" && this.hemoglobina >= 13) && (this.edad == 0 || this.edad == 1 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

    //// >1 y <=12

    else
    
    if ((this.tedad == "Meses" && this.hemoglobina < 10) && (this.edad > 1 && this.edad <= 6 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());

    }

    else
    
    if ((this.tedad == "Meses" && this.hemoglobina >= 10) && (this.edad > 1 && this.edad <= 6 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

     //// >6 y <=12

     else
    
    if ((this.tedad == "Meses" && this.hemoglobina < 11) && (this.edad > 6 && this.edad <= 12 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

    else
    
    if ((this.tedad == "Meses" && this.hemoglobina >= 11) && (this.edad > 6 && this.edad <= 12 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto su hijo es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    } 

    ///// > 1 <=5 años

    else
    
    if ((this.tedad == "Años" && this.hemoglobina < 11.5) && (this.edad > 1 && this.edad <= 5 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }
    else
    
    if ((this.tedad == "Años" && this.hemoglobina >= 11.5) && (this.edad > 1 && this.edad <= 5 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

    /// >5 <=10
    else
    
    if ((this.tedad == "Años" && this.hemoglobina < 12.6) && (this.edad > 5 && this.edad <= 10 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }
    else
    
    if ((this.tedad == "Años" && this.hemoglobina >= 12.6) && (this.edad > 5 && this.edad <= 10 )) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

    /// mujeres> 15 años

    else
    
    if (this.tedad == "Años" && this.hemoglobina < 12 && this.genero=="Femenino" && this.edad > 15) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }
    else
    
    if (this.tedad == "Años" && this.hemoglobina >= 12 && this.genero=="Femenino" && this.edad > 15) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

    //// hombres >15 años


    else
    
    if (this.tedad == "Años" && this.hemoglobina < 14 && this.genero=="Masculino" && this.edad > 15) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es positivo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }
    else
    
    if (this.tedad == "Años" && this.hemoglobina >= 14 && this.genero=="Masculino" && this.edad > 15) {

      const alert = this.alertctrl.create({
        message: ' el nivel de hemoglobina es de: '+this.hemoglobina+', por lo tanto  es negativo para anemia',
        subHeader: '' + this.nombre + ' '+this.apellido,
        buttons: ['cerrar']
      }).then(alert => alert.present());


    }

  }


}

