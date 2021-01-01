import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileAppsPage } from './mobile-apps.page';

describe('MobileAppsPage', () => {
  let component: MobileAppsPage;
  let fixture: ComponentFixture<MobileAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
