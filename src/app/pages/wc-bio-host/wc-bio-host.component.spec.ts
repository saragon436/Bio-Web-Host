import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcBioHostComponent } from './wc-bio-host.component';

describe('WcBioHostComponent', () => {
  let component: WcBioHostComponent;
  let fixture: ComponentFixture<WcBioHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcBioHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcBioHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
