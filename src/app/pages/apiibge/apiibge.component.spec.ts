import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiibgeComponent } from './apiibge.component';

describe('ApiibgeComponent', () => {
  let component: ApiibgeComponent;
  let fixture: ComponentFixture<ApiibgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiibgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiibgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
