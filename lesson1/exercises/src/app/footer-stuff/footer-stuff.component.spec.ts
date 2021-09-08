import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStuffComponent } from './footer-stuff.component';

describe('FooterStuffComponent', () => {
  let component: FooterStuffComponent;
  let fixture: ComponentFixture<FooterStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
