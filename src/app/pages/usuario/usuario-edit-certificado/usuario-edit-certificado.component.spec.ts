import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditCertificadoComponent } from './usuario-edit-certificado.component';

describe('UsuarioEditCertificadoComponent', () => {
  let component: UsuarioEditCertificadoComponent;
  let fixture: ComponentFixture<UsuarioEditCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEditCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
