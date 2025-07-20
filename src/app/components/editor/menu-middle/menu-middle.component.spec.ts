import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMiddleComponent } from './menu-middle.component';

describe('MenuMiddleComponent', () => {
  let component: MenuMiddleComponent;
  let fixture: ComponentFixture<MenuMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
