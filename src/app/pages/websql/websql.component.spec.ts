import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsqlComponent } from './websql.component';

describe('WebsqlComponent', () => {
  let component: WebsqlComponent;
  let fixture: ComponentFixture<WebsqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
