import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { HapusDataComponent } from './hapus-data/hapus-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    DivisionsComponent,
    DashboardComponent,
    AppFooterComponent,
    TambahDataComponent,
    EditDataComponent,
    HapusDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
