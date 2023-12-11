import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  favoriteFramework: string = '';
  
  contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cif: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
  });

  sendForm(): void {
    console.log(this.favoriteFramework);
  }
  constructor(private clienteService: ClienteService) {}

  ContactFormSubmit(): void {
    const nuevoCliente = this.contactForm.value;
    this.clienteService.agregarCliente(nuevoCliente);
    console.log(nuevoCliente);
  }
}
