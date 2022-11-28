import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { PersonalService } from '../../service/personal.service';
import { PositionsService } from '../../service/positions.service';
import { Personal } from '../../types/personal';
import { Position } from '../../types/position';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
  personal: Personal = {
    id: 0,
    name: "",
    surname: "",
    lastname: "",
    birthday: "",
    salary: 0.0,
    position: {
      id: 0,
      position: "",
      description: ""
    },
    user: undefined
  }

  positions: Position[] = [];

  constructor(private positionsService: PositionsService,
    private personalService: PersonalService,
    public modalRef: DialogRef<AddPersonalComponent>) { }

  ngOnInit(): void {
    //Back-End -> Servicio que obtenga las positions
    //Realizar la petición hacia su servicio de positions
    //Asignar las positions a nuestra variable this.positions
    this.positionsService.findAll()
      .subscribe((response: Position[]) => {
        console.log(response);
        this.positions = response;
        this.positionsService.loading = false;
      })
  }

  savePerson() {
    this.personalService.save(this.personal).
      subscribe((response: Personal) => {
        //validar si la persona fue registrada correctamente
        //SI -> Cerrar Modal, limpiar el form y actualizar la consulta general del personal
        if (response != null)
          this.personal = {
            id: 0,
            name: "",
            surname: "",
            lastname: "",
            birthday: "",
            salary: 0.0,
            position: {
              id: 0,
              position: "",
              description: ""
            },
            user: undefined
          }
      })
  }

}
