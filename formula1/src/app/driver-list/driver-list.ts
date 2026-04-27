import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver } from '../models/driver.model';
import { DriverDetail } from '../driver-detail/driver-detail';

@Component({
  selector: 'app-driver-list',
  imports: [CommonModule, DriverDetail],
  templateUrl: './driver-list.html',
  styleUrl: './driver-list.css',
})
export class DriverList {
  selectedDriver?: Driver;    //variabile per tenere traccia del driver selezionato

  drivers: Driver[] = [       //drivers è un array di oggetti di tipo Driver
    {
      nome: 'Charles Leclerc',
      scuderia: 'Ferrari',
      numeroGara: 16,
      punti: 350,
      nazione: 'Monaco',
      immagineCasco: 'helmets/leclerc.jpg',
      coloreScuderia: '#DC0000'
    },
    {
      nome: 'Max Verstappen',
      scuderia: 'Red Bull',
      numeroGara: 1,
      punti: 300,
      nazione: 'Olanda',
      immagineCasco: 'helmets/verstappen.jpg',
      coloreScuderia: '#1E41FF'
    },
    {
      nome: 'Lewis Hamilton',
      scuderia: 'Mercedes',
      numeroGara: 44,
      punti: 200,
      nazione: 'Regno Unito',
      immagineCasco: 'helmets/hamilton.jpg',
      coloreScuderia: '#00D2BE'
    }
  ];

  selectDriver(driver: Driver) {   //metodo per selezionare un driver e visualizzarne i dettagli
    this.selectedDriver = driver;
  }



}


