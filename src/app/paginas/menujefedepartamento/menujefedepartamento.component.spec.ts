import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenujefedepartamentoComponent } from './menujefedepartamento.component';

describe('MenujefedepartamentoComponent', () => {
  let component: MenujefedepartamentoComponent;
  let fixture: ComponentFixture<MenujefedepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenujefedepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenujefedepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
