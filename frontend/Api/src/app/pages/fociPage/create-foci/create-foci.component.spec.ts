import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFociComponent } from './create-foci.component';

describe('CreateFociComponent', () => {
  let component: CreateFociComponent;
  let fixture: ComponentFixture<CreateFociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
