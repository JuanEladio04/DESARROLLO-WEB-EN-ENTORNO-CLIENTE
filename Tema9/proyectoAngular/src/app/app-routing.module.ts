import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const appRoutes:Routes=[
  {path:'Listar usuarios',component:ListarUsuariosComponent},
  {path:'Crear usuarios',component:CrearUsuariosComponent},
  {path:'',redirectTo:'/Listar usuarios', pathMatch:'full'},
  {path:'**',component: PrincipalComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
