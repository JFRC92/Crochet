import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactserviceComponent } from './contactservice.component';

describe('ContactserviceComponent', () => {
  let component: ContactserviceComponent;
  let fixture: ComponentFixture<ContactserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
