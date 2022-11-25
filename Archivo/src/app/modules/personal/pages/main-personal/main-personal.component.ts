import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from '../../service/personal.service';
import { Personal } from '../../types/personla';
import { AddPersonalComponent } from '../add-personal/add-personal.component';

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html'
})

export class MainPersonalComponent implements OnInit {

  displayedColumns: string[] = [
    '#',
    'name',
    'surname',
    'lastname',
    'birthday',
    'salary',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  personal!: MatTableDataSource<Personal>;
  constructor(private personalService: PersonalService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.personalService.findAll()
    .subscribe((response: Personal[])=>{
      this.personal = new MatTableDataSource<Personal>(response);
      this.personalService.loading = false;
      this.personal.paginator = this.paginator;
      this.personal.sort = this.sort;
    })
  }
  announceSortChange(sort: Sort){
    if(sort.direction){
      this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    } else{
      this._liveAnnouncer.announce(`Sort cleared`)
    }
  }
  //Modal
  openDialog(enterAnimation: string,
    exitAnimation: string){
      const modalRef = this.dialog.open(AddPersonalComponent,{//ng g c modules/personal/pages/addPersonal
        width:"60%",
        enterAnimationDuration:enterAnimation,
        exitAnimationDuration:exitAnimation,
        disableClose:true
      });
      modalRef.afterClosed().subscribe((result: any)=>{
        console.log("Modal closed");        
      })
  }
}
