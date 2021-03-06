import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPageComponent } from './desktop-page.component';

describe('DesctopPageComponent', () => {
  let component: DesktopPageComponent;
  let fixture: ComponentFixture<DesktopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
