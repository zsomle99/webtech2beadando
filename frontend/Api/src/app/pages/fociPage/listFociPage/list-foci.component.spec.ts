import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFociComponent } from './list-foci.component';

describe('ListFociComponent', () => {
  let component: ListFociComponent;
  let fixture: ComponentFixture<ListFociComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFociComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
