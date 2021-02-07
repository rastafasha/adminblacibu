import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCertificacionComponent } from './perfil-certificacion.component';

describe('PerfilCertificacionComponent', () => {
  let component: PerfilCertificacionComponent;
  let fixture: ComponentFixture<PerfilCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
