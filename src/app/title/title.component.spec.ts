import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';
import { TitleComponent } from './title.component';
import { element } from 'protractor';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let target: TitleComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    });

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new TitleComponent();
  });


  describe('Interpolation Binding: field', () => {
    it(`should use title field in HTML`, () => {
      component.title = 'fake';
      fixture.detectChanges();

      element = debugElement.query(By.css('h1')).nativeElement;
      expect(element.textContent).toBe('fake');
    });

    it(`should have title as 'todos' in class`, () => {
      expect(target.title).toBe('todos');
    });
  });

});
