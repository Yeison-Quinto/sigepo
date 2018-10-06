import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { ExistenciaProyectosComponent } from './existencia-proyectos/existencia-proyectos.component';
import { FormsModule} from '@angular/forms';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'existencia', component: ExistenciaProyectosComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ExistenciaProyectosComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
