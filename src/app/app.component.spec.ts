import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './shared/header/header.component';
import {UserMenuComponent} from './shared/header/user-menu/user-menu.component';
import {SharedModule} from './shared/shared.module';

xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        UserMenuComponent
      ],
      imports: [
        SharedModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render icons sprite', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-icons-sprite')).toBeDefined();
  }));
});
