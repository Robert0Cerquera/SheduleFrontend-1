import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from "./Pages/about/about.component";
import { MenuComponent } from "./Pages/menu/menu.component";
import { NavbarComponent } from "./Pages/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ScheduleFrontend';
}
