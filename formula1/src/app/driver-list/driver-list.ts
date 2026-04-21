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
  selectedDriver?: Driver;

  drivers: Driver[] = [
    {
      nome: 'Charles Leclerc',
      scuderia: 'Ferrari',
      numeroGara: 16,
      punti: 250,
      nazione: 'Monaco',
      immagineCasco: 'https://via.placeholder.com/100'
    },
    {
      nome: 'Max Verstappen',
      scuderia: 'Red Bull',
      numeroGara: 1,
      punti: 300,
      nazione: 'Olanda',
      immagineCasco: 'https://via.placeholder.com/100'
    },
    {
      nome: 'Lewis Hamilton',
      scuderia: 'Mercedes',
      numeroGara: 44,
      punti: 200,
      nazione: 'Regno Unito',
      immagineCasco: 'https://via.placeholder.com/100'
    }
  ];

  selectDriver(driver: Driver) {
    this.selectedDriver = driver;
  }

  getColor(scuderia: string): string {
  switch (scuderia) {
    case 'Ferrari': return 'red';
    case 'Red Bull': return 'blue';
    case 'Mercedes': return 'silver';
    default: return 'black';
  }
}
}


