import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruta } from '../carta/carta.component';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent  {
 @Input() fruta : Fruta = { nombre : "", precio : null , cantidad : null};
 @Output() borrarFruta = new EventEmitter();

borrar(){
    this.borrarFruta.emit(this.fruta.nombre)
};
}