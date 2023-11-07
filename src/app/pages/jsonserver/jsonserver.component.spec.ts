import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonserverComponent } from './jsonserver.component';

describe('JsonserverComponent', () => {
  let component: JsonserverComponent;
  let fixture: ComponentFixture<JsonserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
