import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacePolicyComponent } from './privace-policy.component';

describe('PrivacePolicyComponent', () => {
  let component: PrivacePolicyComponent;
  let fixture: ComponentFixture<PrivacePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
