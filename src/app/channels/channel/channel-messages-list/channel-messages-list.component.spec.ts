import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelMessagesListComponent } from './channel-messages-list.component';

describe('MessagesListComponent', () => {
  let component: ChannelMessagesListComponent;
  let fixture: ComponentFixture<ChannelMessagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelMessagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
