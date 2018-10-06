import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenciaProyectosComponent } from './existencia-proyectos.component';

describe('ExistenciaProyectosComponent', () => {
  let component: ExistenciaProyectosComponent;
  let fixture: ComponentFixture<ExistenciaProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciaProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenciaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
