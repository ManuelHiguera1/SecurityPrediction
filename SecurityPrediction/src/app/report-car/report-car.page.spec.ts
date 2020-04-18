import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportCarPage } from './report-car.page';

describe('ReportCarPage', () => {
  let component: ReportCarPage;
  let fixture: ComponentFixture<ReportCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
