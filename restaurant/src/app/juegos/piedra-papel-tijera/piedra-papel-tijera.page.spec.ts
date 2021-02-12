import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiedraPapelTijeraPage } from './piedra-papel-tijera.page';

describe('PiedraPapelTijeraPage', () => {
  let component: PiedraPapelTijeraPage;
  let fixture: ComponentFixture<PiedraPapelTijeraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTijeraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiedraPapelTijeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
