import { Component } from '@angular/core';
import { Fruta } from '../carta/carta.component';


@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {

frutas : Fruta [] = [];
  nuevafruta : Fruta = {
  nombre: "",
  cantidad: null,
  precio:null,
};

 anadir(): void {
    if (
      this.isValid(this.nuevafruta)
    ) {
      this.frutas.push(this.nuevafruta);
      this.nuevafruta = {nombre:"",cantidad:null,precio:null}
    }
  };
isValid(nuevafruta: Fruta): boolean {
if (!nuevafruta?.nombre) {    
      alert('Indica el nombre de la fruta');
      return false;
    }
    if (this.frutas.some(i => i.nombre == nuevafruta.nombre)) {    
      alert('Esta fruta ya está en el carrito');
      return false;
    }
    if (!nuevafruta?.cantidad) {    
      alert('Indica la cantidad');
      return false;
    }
    if (!nuevafruta?.precio) {
      alert('Indica el precio');
      return false;
    }
    return true;
  }
  pagar() :void {
    this.frutas = [];
    alert ("Pago Completado");
  }
}
