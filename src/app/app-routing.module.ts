import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVentureComponent } from './create-venture/create-venture.component';
import { GetAllVenturesComponent } from './get-all-ventures/get-all-ventures.component';
import { GetVentureComponent } from './get-venture/get-venture.component';
import { UpdateVentureComponent } from './update-venture/update-venture.component';
import { DeleteVentureComponent } from './delete-venture/delete-venture.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'create-venture', component: CreateVentureComponent},
  {path: 'get-all-ventures', component: GetAllVenturesComponent},
  {path: 'get-venture', component: GetVentureComponent},
  {path: 'update-venture', component: UpdateVentureComponent},
  {path: 'delete-venture', component: DeleteVentureComponent},
  {path: 'nouveau', component: HomeComponent},
  {path: '**', redirectTo: 'nouveau'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
