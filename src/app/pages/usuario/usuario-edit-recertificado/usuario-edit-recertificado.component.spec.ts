import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditRecertificadoComponent } from './usuario-edit-recertificado.component';

describe('UsuarioEditRecertificadoComponent', () => {
  let component: UsuarioEditRecertificadoComponent;
  let fixture: ComponentFixture<UsuarioEditRecertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEditRecertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditRecertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
