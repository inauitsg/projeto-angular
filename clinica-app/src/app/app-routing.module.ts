import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
 
  {
    path: 'cadastrocontato',
    component: CadastroContatoComponent
  },
  {
    path: 'consultacontato',
    component: ConsultaContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'cadastro/:idcontato',
    component: EditarMedicoComponent
  },
  {
    path: 'cadastrousuario',
    component: RegistrarUsuarioComponent
  },
  {
    path: 'consultausuario',
    component: ConsultaUsuarioComponent
  },
  {
    path:'usuario/:idusuario',
    component: EditaUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
