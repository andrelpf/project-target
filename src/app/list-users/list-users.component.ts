import { InitialFormComponent } from './../initial-form/initial-form.component';
import { Component, DoCheck, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/initial-form';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, DoCheck {
  // Input
  @Input() users!: User[];
  //Sort
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  // Table
  displayedColumns: string[] = ['name', 'tel'];
  dataSource!: MatTableDataSource<any>;

  constructor(@Inject(InitialFormComponent) private parent: InitialFormComponent) { }

  ngOnInit(): void {
    // Atualizar tabela
    this.atualizarTable();
  }

  ngDoCheck(): void {
    // Atualizar tabela
    this.atualizarTable();
  }

  /**
   * Método para atualizar tabela
   */
  atualizarTable() {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }

  /**
   * Aplicar filtro
   * @param event evento
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Limpar tabela
   */
  clearTable() {
    this.dataSource.data = [];
    this.parent.users = [];
  }
}
