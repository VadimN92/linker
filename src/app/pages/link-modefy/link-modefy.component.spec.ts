import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkModefyComponent } from './link-modefy.component';

describe('LinkModefyComponent', () => {
  let component: LinkModefyComponent;
  let fixture: ComponentFixture<LinkModefyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkModefyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkModefyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
