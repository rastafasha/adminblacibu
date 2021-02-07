import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecertificadosComponent } from './recertificados.component';

describe('RecertificadosComponent', () => {
  let component: RecertificadosComponent;
  let fixture: ComponentFixture<RecertificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecertificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
