import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  nombre: string = 'Capitan America';
  nombre2: string = 'JesUs DAniel ValDEZ ROdriGuez';
  arreglo: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.21458;

  salario: number = 12345;
  
  fecha: Date = new Date();

  idioma: string = 'es';

  videoURL: string = 'https://www.youtube.com/embed/xLYiIBCN9ec';
  
  activar: boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '500',
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };
}
