import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptContainerComponent } from './chatgpt-container.component';

describe('ChatgptContainerComponent', () => {
  let component: ChatgptContainerComponent;
  let fixture: ComponentFixture<ChatgptContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatgptContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatgptContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
