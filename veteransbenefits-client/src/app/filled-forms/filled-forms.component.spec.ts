import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledFormsComponent } from './filled-forms.component';

describe('FilledFormsComponent', () => {
  let component: FilledFormsComponent;
  let fixture: ComponentFixture<FilledFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledFormsComponent]
    });
    fixture = TestBed.createComponent(FilledFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
