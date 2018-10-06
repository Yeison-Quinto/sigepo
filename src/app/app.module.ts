import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { ExistenciaProyectosComponent } from './existencia-proyectos/existencia-proyectos.component';
import { FormsModule} from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'existencia', component: ExistenciaProyectosComponent },
  {path: 'agregar', component: AgregarComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ExistenciaProyectosComponent,
    AgregarComponent,
  
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
