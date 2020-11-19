import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

declare var google;

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  splash = true;

  constructor(private firestore : AngularFirestore) { }

 excelenteUno = 0;
 muyBuenoUno = 0;
 buenoUno = 0;
 regularUno = 0;
 maloUno = 0;

  excelenteDos = 0;
 muyBuenoDos = 0;
 buenoDos = 0;
 regularDos = 0;
 maloDos = 0;


  ngOnInit() {

    setTimeout(() => {
      this.splash = false;
    }, 4000);


    let fb = this.firestore.collection('encuestas');
              
      
    
    fb.valueChanges().subscribe(datos =>{       
      
      datos.forEach( (dato:any) =>{

        if(dato.preguntaUno == 1)
        {
          this.maloUno += 1;
        }
        else if (dato.preguntaUno == 2)
        {
          this.regularUno += 1;
        }
        else if (dato.preguntaUno == 3)
        {
          this.buenoUno += 1;
        }
        else if (dato.preguntaUno == 4)
        {
          this.muyBuenoUno += 1;
          
        }
        else if (dato.preguntaUno == 5)
        {
          this.excelenteUno += 1;
        }

       });

      })

      setTimeout(() => {
        

        var dataTwo = new google.visualization.DataTable();
        dataTwo.addColumn('string', 'Topping');
        dataTwo.addColumn('number', 'Slices');
        dataTwo.addRows([
          ['Excelente', this.excelenteUno],
          ['Muy bueno', this.muyBuenoUno],
          ['Bueno', this.buenoUno],
          ['Regular', this.regularUno],
          ['Malo', this.maloUno]
        ]);

        
        var optionsTwo = {'title':'¿Qué le parecio nuesta app?',
                       'width':400,
                       'height':300,
                       'font-size': '100px',
                        };

        
        var chartTwo = new google.visualization.PieChart(document.getElementById('char_div'));
        chartTwo.draw(dataTwo, optionsTwo);

      }, 6000);


      let fb2 = this.firestore.collection('encuestas');
              
      
    
    fb2.valueChanges().subscribe(datos =>{       
      
      datos.forEach( (dato:any) =>{

        if(dato.preguntaDos == 1)
        {
          this.maloDos += 1;
        }
        else if (dato.preguntaDos == 2)
        {
          this.regularDos += 1;
        }
        else if (dato.preguntaDos == 3)
        {
          this.buenoDos += 1;
        }
        else if (dato.preguntaDos == 4)
        {
          this.muyBuenoDos += 1;
          
        }
        else if (dato.preguntaDos == 5)
        {
          this.excelenteDos += 1;
        }

       });

      })

      setTimeout(() => {
        

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Excelente', this.excelenteDos],
          ['Muy bueno', this.muyBuenoDos],
          ['Bueno', this.buenoDos],
          ['Regular', this.regularDos],
          ['Malo', this.maloDos]
        ]);

        
        var options = {'title':'¿Que le parecio el servicio del restaurante?',
                       'width':400,
                       'height':300,
                       'font-size': '100px',
                        };

        
        var chart= new google.visualization.PieChart(document.getElementById('char_divTwo'));
        chart.draw(data, options);

      }, 6000);
        
  }

}
