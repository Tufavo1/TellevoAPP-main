import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from '../component/slide/slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, SlideComponent]
})
export class HomePage implements OnInit {

  slides: any[] = [];
  constructor(
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.slides = [
      {
        banner: 'assets/img/fondos-banner/experiencia-programacion-persona-que-trabaja-codigos-computadora-730x730.jpg',
        description: 'En Duoc UC le abrimos las puertas a la tecnología e innovación con los fondos de Desarrollo Experimental'
      },
      {
        banner: 'assets/img/fondos-banner/DSC_9633-min-730x730.jpg',
        description: 'Mujeres líderes de la industria brindaron charlas magistrales en la primera edición de Security Woman'
      },
      {
        banner: 'assets/img/fondos-banner/MicrosoftTeams-image-21-730x730.jpg',
        description: 'La copa de los Juegos Olímpicos Duoc UC 2023 se queda nuevamente en sede Maipú'
      },
    ];
  }

  moveButton() {
    this.router.navigateByUrl('main-login/login')
  }
}