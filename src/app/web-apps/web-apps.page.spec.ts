import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebAppsPage } from './web-apps.page';

describe('WebAppsPage', () => {
  let component: WebAppsPage;
  let fixture: ComponentFixture<WebAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAppsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
