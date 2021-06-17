import { Component, EventEmitter, Input, Output } from '@angular/core';
export type Fruta = {
  nombre: string;
  cantidad: number;
  precio: number;
};

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  @Input() frutas: Fruta[];
  @Output() pagarFrutas = new EventEmitter();
  borrarFrutaCarrito(index: number): void {
    this.frutas.splice(index, 1);
  }
  obtenerTotal(): number {
    let result = 0;
    this.frutas.forEach(fruta => {
      result = result + fruta.precio * fruta.cantidad;
    });
    return result;
  }
  pagar(): void {
    this.pagarFrutas.emit(this.frutas)
  }
}
