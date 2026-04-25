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
      punti: 350,
      nazione: 'Monaco',
      immagineCasco: 'helmets/leclerc.jpg'
    },
    {
      nome: 'Max Verstappen',
      scuderia: 'Red Bull',
      numeroGara: 1,
      punti: 300,
      nazione: 'Olanda',
      immagineCasco: 'helmets/verstappen.jpg'
    },
    {
      nome: 'Lewis Hamilton',
      scuderia: 'Mercedes',
      numeroGara: 44,
      punti: 200,
      nazione: 'Regno Unito',
      immagineCasco: 'helmets/hamilton.jpg'
    }
  ];

  selectDriver(driver: Driver) {
    this.selectedDriver = driver;
  }

}


