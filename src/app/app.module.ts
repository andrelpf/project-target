// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Router
import { AppRoutingModule } from './app-routing.module';
// Criados
import { AppComponent } from './app.component';
import { InitialFormModule } from './initial-form/initial-form.module';
import { ListUsersModule } from './list-users/list-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InitialFormModule,
    ListUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
