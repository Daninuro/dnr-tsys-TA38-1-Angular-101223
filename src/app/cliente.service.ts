import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Partial<{ nombre: string | null; cif: string | null; direccion: string | null; pais: string | null; }>[] = [];

  agregarCliente(cliente: Partial<{ nombre: string | null; cif: string | null; direccion: string | null; pais: string | null; }>): void {
    this.clientes.push(cliente);
  }

  obtenerClientes(): Partial<{ nombre: string | null; cif: string | null; direccion: string | null; pais: string | null; }>[] {
    return this.clientes;
  }
  constructor() { }
}
