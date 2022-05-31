// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Criado
import { InitialFormComponent } from './initial-form.component';
import { ListUsersModule } from '../list-users/list-users.module';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InitialFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatButtonModule,
    ListUsersModule
  ]
})
export class InitialFormModule { }
