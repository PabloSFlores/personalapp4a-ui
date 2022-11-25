import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../service/personal.service';
import { Personal } from '../../types/personla';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
  personal: Personal = {
    id:0,
    name:"",
    surname:"",
    lastname:"",
    birthday:"",
    salary:0.0,
    position:{
      id:0,
      position:"",
      description:""
    },
    user: undefined
  }

  positions: any = [];

  constructor(private personalService: PersonalService,
    public modalRef: DialogRef<AddPersonalComponent>) { }

  ngOnInit(): void {
    //Back-End -> Servicio que obtenga las positions
    //Realizar la petición hacia su servicio de postions
    //Asignar las postions a nuestra variable this.positions
  }

  savePerson(){
    this.personalService.save(this.personal).
    subscribe((response: Personal)=>{
      //validar si la persona fue registrada correctamente
      //SI -> Cerrar Modal, limpiar el form y actualizar la consulta general del personal
    })
  }

}
