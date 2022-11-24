import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from '../../service/personal.service';
import { Personal } from '../../types/personla';

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html'
})

export class MainPersonalComponent implements OnInit {

  dispalyedColumns: string[] = [
    '#',
    'name',
    'surname',
    'lastname',
    'birthday',
    'salary',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
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
  announcedSortChange(sort: Sort){
    if(sort.direction){
      this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    } else{
      this._liveAnnouncer.announce(`Sort cleared`)
    }
  }
  //Modal
}
