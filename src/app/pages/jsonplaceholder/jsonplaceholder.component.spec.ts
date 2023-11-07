import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonplaceholderComponent } from './jsonplaceholder.component';

describe('JsonplaceholderComponent', () => {
  let component: JsonplaceholderComponent;
  let fixture: ComponentFixture<JsonplaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonplaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
