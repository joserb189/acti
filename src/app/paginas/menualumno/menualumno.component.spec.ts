import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenualumnoComponent } from './menualumno.component';

describe('MenualumnoComponent', () => {
  let component: MenualumnoComponent;
  let fixture: ComponentFixture<MenualumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenualumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenualumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
