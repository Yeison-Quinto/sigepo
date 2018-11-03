import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { ExistenciaProyectosComponent } from './existencia-proyectos/existencia-proyectos.component';
import { FormsModule} from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { BarraComponent } from './barra/barra.component';


//angular material animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//
import { MaterialModule } from './material';
import { ActualizarComponent } from './existencia-proyectos/actualizar/actualizar.component';
import { InicioComponent } from './inicio/inicio.component';
import { StepperComponent } from './agregar/stepper/stepper.component';
import { ProyectoComponent } from './agregar/stepper/proyecto/proyecto.component';
import { GestoresComponent } from './agregar/stepper/gestores/gestores.component';
import { InformacionComponent } from './agregar/stepper/informacion/informacion.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'existencia', component: ExistenciaProyectosComponent },
  {path: 'agregar', component: AgregarComponent },
  {path: 'inicio', component: InicioComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    ExistenciaProyectosComponent,
    AgregarComponent,
    BarraComponent,
    ActualizarComponent,
    InicioComponent,
    StepperComponent,
    ProyectoComponent,
    GestoresComponent,
    InformacionComponent,
    
       
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
