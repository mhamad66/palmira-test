import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedKpisComponent } from './linked-kpis.component';

describe('LinkedKpisComponent', () => {
  let component: LinkedKpisComponent;
  let fixture: ComponentFixture<LinkedKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedKpisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
