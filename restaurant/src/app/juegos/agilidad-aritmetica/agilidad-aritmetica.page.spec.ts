import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgilidadAritmeticaPage } from './agilidad-aritmetica.page';

describe('AgilidadAritmeticaPage', () => {
  let component: AgilidadAritmeticaPage;
  let fixture: ComponentFixture<AgilidadAritmeticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadAritmeticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgilidadAritmeticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
