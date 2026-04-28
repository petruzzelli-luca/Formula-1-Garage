import { Component, Input } from '@angular/core';
import { Driver } from '../models/driver.model';

@Component({
  selector: 'app-driver-detail',
  imports: [],
  templateUrl: './driver-detail.html',
  styleUrl: './driver-detail.css',
})
export class DriverDetail {
  @Input() driver!: Driver;  //ricevere i dati del driver selezionato dal componente padre
}
