import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroProductoPage } from './registro-producto.page';

describe('RegistroProductoPage', () => {
  let component: RegistroProductoPage;
  let fixture: ComponentFixture<RegistroProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
