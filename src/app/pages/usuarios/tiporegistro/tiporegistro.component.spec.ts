import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiporegistroComponent } from './tiporegistro.component';

describe('TiporegistroComponent', () => {
  let component: TiporegistroComponent;
  let fixture: ComponentFixture<TiporegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiporegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiporegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
