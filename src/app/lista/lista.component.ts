import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  clientes: Partial<{ nombre: string | null; cif: string | null; direccion: string | null; pais: string | null; }>[] = [];
  constructor(private clienteService: ClienteService) {
    this.clientes = clienteService.obtenerClientes();
  }
}


