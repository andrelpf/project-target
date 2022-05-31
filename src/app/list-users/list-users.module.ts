// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Criado
import { ListUsersComponent } from './list-users.component';
// Material
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [ListUsersComponent]
})
export class ListUsersModule { }
