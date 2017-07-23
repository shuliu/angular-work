import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'todos'`, () => {
    expect(component.title).toBe('todos');
  });

  it(`should have as getTitle'`, () => {
    expect(component.getTitle()).toBe('todos');
  });


  it(`should use title property in HTML`, () => {
    component.title = 'fake';
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toBe('fake');
  });

});
