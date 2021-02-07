import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecertificacionComponent } from './perfil-recertificacion.component';

describe('PerfilRecertificacionComponent', () => {
  let component: PerfilRecertificacionComponent;
  let fixture: ComponentFixture<PerfilRecertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilRecertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRecertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
