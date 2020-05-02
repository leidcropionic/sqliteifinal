import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModel } from '@angular/forms';
import { SQLite,SQLiteObject }from '@ionic-native/SQlite/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  databaseObj: SQLiteObject;
  name_model: string = "";
  row_data: any = [];
  readonly database_name: string = "freaky_datatable1.db";
  readonly table_name: string = "myfreakytable2";


  updateActive: boolean;
  to_update_item: any;
  pid;
  apellido;
  cedula;
  eps;
  enfermedad;
  patologia1;
  glucemia :number =0;
  glucemia2;
  patologia: string = "";

  constructor(public alertctrl: AlertController,private platform:Platform,private sqlite:SQLite ) 
    {
      this.platform.ready().then(() => {
      }).catch(error => {
        console.log(error)
        console.log("pruebas21") 
        this.createDB();
      })
      


     }

     createDB() {
      this.sqlite.create({
        name: this.database_name, 
        location: 'default'
      })
        .then ((db: SQLiteObject) => {
          console.log("pruebas")
          
          this.databaseObj = db;
          alert('freaky_datatable Database Created!');
        })
        .catch(e => {
          console.log("pruebas")
          alert("error " + JSON.stringify(e))
        })
        console.log("pruebas");
    }



createTable() {
  this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Nombre varchar(255), Apellido varchar(255), Cedula varchar(255), Eps varchar(255), Enfermedad varchar(255), Glucemia INTEGER, Patologia varchar(255))', [])
    .then(() => {
      alert('Table Created!');
    })
 
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}

insertRow(){

  if(!this.name_model.length){
     alert("ingrese name ")
     console.log(this.name_model.length);
     return;
  }
  alert("prueba ")
  console.log(this.name_model)
  console.log(this.apellido)
  console.log(this.cedula)
  console.log(this.eps)
  console.log(this.enfermedad)
  console.log(this.glucemia)
  console.log(this.patologia)


  this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Nombre,Apellido,Cedula,Eps,Enfermedad,Glucemia,Patologia) VALUES ("' + this.name_model + '","' + this.apellido + '","' + this.cedula + '","' + this.eps + '","' + this.enfermedad + '","' + this.glucemia+'","' + this.patologia + '")', [])
  .then (()=>{
 alert ('Row Inserted!');
 this.getRows();})
 
 .catch (error => {
  console.log(error)});

}

enableUpdate(item) {
  
  this.pid = item.pid;
  this.updateActive = true;
  this.to_update_item = item;
  this.name_model = item.Nombre;
  this.apellido = item.Apellido;
  this.cedula = item.Cedula;
  this.eps = item.Eps;
  this.enfermedad = item.Enfermedad;
  this.glucemia = item.Glucemia;
  this.patologia = item.Patologia;



  console.log(item);


}

// Update row with saved row id
updateRow() {


  this.databaseObj.executeSql(`
    UPDATE ${this.table_name} 
    SET Nombre = '${this.name_model}',
    Apellido = '${this.apellido}',
    Cedula = '${this.cedula}',
    Eps = '${this.eps}',
    Enfermedad = '${this.enfermedad}',
    Glucemia = '${this.glucemia}',
    Patologia = '${this.patologia}'
    WHERE pid = ${this.pid}
  `, [])
    .then(() => {
      alert('Row Updated!');
      this.updateActive = false;
      this.getRows();
      this.pid = 0;
      this.name_model = "";
      this.apellido ="";
      this.cedula = "";
      this.eps = "";
      this.enfermedad = "";
      this.patologia = "";
      this.glucemia =0 ;



    })
   
 .catch (error => {
  console.log(error)});
}



getRows() {
  this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
    .then((res) => {
      this.row_data = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          console.log(this.row_data);
          this.row_data.push(res.rows.item(i));
          
        }
      }
    })
    .catch(e => {
      alert("error " + JSON.stringify(e))
    });
}



  deleteRow(item) {
    this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
      .then((res) => {
        alert("Registro eliminado");
        this.getRows();
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
 
  }

    

  btnclick() {
    if (this.enfermedad == "ninguno") {
      this.glucemia=0; 
      this.patologia="ninguna";
     
      const alert = this.alertctrl.create({
        message: 'usted no necesita hacer el examen de azucar, ya que no padece una de los sintomas',
        subHeader: '' + this.name_model + '',
        buttons: ['cerrar '+  this.insertRow()],
      }).then(alert => alert.present());


    } else {

      const alert = this.alertctrl.create({
        message: 'por favor ingrese su nivel de glucemia',
        subHeader: '' + this.name_model + '',
        inputs: [{
          name: 'glucemia1',
          placeholder: 'ingrese nivel de glucemia',
          id: 'glucemia1',
          type: 'number',



        }],

        buttons: [
          {
            text: 'cancelar',
            role: 'cancel'
          },
          {
            text: 'consultar',
            handler: data => {

              if (data.glucemia1 >= 0 && data.glucemia1 < 7) {
                this.patologia="ninguna";
                this.glucemia=data.glucemia1;
                const alert = this.alertctrl.create({
    

                  message: 'su puntaje es de: ' + data.glucemia1 + ' estas sano como un limon.',
                  subHeader: 'usted ' + this.name_model + ' , ninguna',
                  buttons: ['cerrar '+ this.insertRow()],
                }).then(alert => alert.present());

              } else

              if (data.glucemia1 >= 7 && data.glucemia1 < 13.8) {
                this.patologia="diabetes hiperglicemia aislada";
                this.glucemia=data.glucemia1;
                const alert = this.alertctrl.create({
    

                  message: 'su puntaje es de: ' + data.glucemia1 + ' recomendaciones: Indicar glucemia en ayunas y TGP en pacientes sin diagnóstico.  - Si deshidratación, rehidratación oral o EV según las demandas. - Reevaluar conducta terapéutica en diabéticos y cumplimiento de los pilares. - Reevaluar dosis de hipoglucemiantes.',
                  subHeader: 'usted ' + this.name_model + ' , presenta patologia de diabetes hiperglicemia aislada',
                  buttons: ['cerrar '+ this.insertRow()],
                }).then(alert => alert.present());

              } else

                if (data.glucemia1 >= 13.8 && data.glucemia1 < 33) {
                  this.patologia="diabetes cetoasidosis diabetica'";
                  this.glucemia=data.glucemia1;
                  const alert = this.alertctrl.create({

                    message: 'su puntaje es de: ' + data.glucemia1 + ' recomendaciones: Coordinar traslado y comenzar tratamiento. - Hidratación con Solución salina 40 ml/Kg en las primeras 4 horas. 1-2 L la primera hora. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U = 1mv, ondas U= T). - Evitar insulina hasta desaparecer signos de hipopotasemia. - Administrar insulina simple 0,1 U/kg EV después de hidratar.',
                    subHeader: 'usted ' + this.name_model + ' , presenta patologia de diabetes cetoasidosis diabetica',
                    buttons: ['cerrar '+  this.insertRow()],
                  }).then(alert => alert.present());

                } else

                  if (data.glucemia1 > 33) {
                    this.patologia="diabetes hiperosmolar hiperglumeico no cetosico";
                    this.glucemia=data.glucemia1;
                    const alert = this.alertctrl.create({

                      message: 'su puntaje es de: ' + data.glucemia1 + ' recomendaciones: Coordinar traslado y comenzar tratamiento. - Hidratación con Solución Salina 10-15 ml/Kg/h hasta conseguir estabilidad hemodinámica. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U = 1mv, ondas U= T).',
                      subHeader: 'usted ' + this.name_model + ' , presenta patologia de diabetes hiperosmolar hiperglumeico no cetosico',
                      buttons: ['cerrar '+  this.insertRow()],
                    }).then(alert => alert.present());

                  }


      

         
           
                }
          }


        ]
      }).then(alert => alert.present());



    }
  
 
  }
}
