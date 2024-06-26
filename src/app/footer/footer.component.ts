import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  environment = environment
  currentYear = new Date().getFullYear()
  facebook = null
  instagram = null
  nosotros = null
  email = null
  telefono = null
  email2 = null
  telefono2 = null
  direccion = null
  maps = null
  app = null

  constructor(private dataService: DataService){
    this.dataService.data.subscribe(data => {
      if(data !== null){
        this.facebook = data.find((el:any) => el.clave === 'facebook')?.valor;
        this.instagram = data.find((el:any) => el.clave === 'instagram')?.valor;
        this.nosotros = data.find((el:any) => el.clave === 'sobre_nosotros')?.valor;
        this.email = data.find((el:any) => el.clave === 'email')?.valor;
        this.telefono = data.find((el:any) => el.clave === 'telefono')?.valor;
        this.email2 = data.find((el:any) => el.clave === 'email2')?.valor;
        this.telefono2 = data.find((el:any) => el.clave === 'telefono2')?.valor;
        this.maps = data.find((el:any) => el.clave === 'ubicacion_url')?.valor;
        this.direccion = data.find((el:any) => el.clave === 'direccion')?.valor;
        this.app = data.find((el:any) => el.clave === 'app')?.valor;
      }
    })
  }
}
