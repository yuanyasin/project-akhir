import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionsComponent},
  {path:"tambah-data",component:TambahDataComponent},
  {path:"editData",component:EditDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }