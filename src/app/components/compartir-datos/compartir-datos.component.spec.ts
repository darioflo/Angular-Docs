import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirDatosComponent } from './compartir-datos.component';

describe('CompartirDatosComponent', () => {
  let component: CompartirDatosComponent;
  let fixture: ComponentFixture<CompartirDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartirDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartirDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
