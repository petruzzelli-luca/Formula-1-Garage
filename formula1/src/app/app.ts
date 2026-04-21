import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DriverList } from './driver-list/driver-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DriverList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formula1');
}
