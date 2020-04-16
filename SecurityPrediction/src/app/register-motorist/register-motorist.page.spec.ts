import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterMotoristPage } from './register-motorist.page';

describe('RegisterMotoristPage', () => {
  let component: RegisterMotoristPage;
  let fixture: ComponentFixture<RegisterMotoristPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMotoristPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterMotoristPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
