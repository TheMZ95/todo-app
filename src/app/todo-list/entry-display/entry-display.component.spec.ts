import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryDisplayComponent} from './entry-display.component';

describe('EntryDisplayComponent', () => {
  let component: EntryDisplayComponent;
  let fixture: ComponentFixture<EntryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryDisplayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EntryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
