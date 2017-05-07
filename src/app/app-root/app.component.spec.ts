import { fakeAsync, async, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { MdToolbar } from '@angular/material';

import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';

export function describe_tests() {
  describe('AppComponent', () => {
    beforeEach(() => { });

    it('should create the app', fakeAsync(() => {
      create_app_component().then((app_component) => {
        const app = app_component.sub;
        expect(app).toBeTruthy();
      })
    }));

    it('should have a toolbar title when rendered', fakeAsync(() => {
      create_app_component().then((app_component) => {
        const title = app_component.get_toolbar_title();
        expect(title).toEqual('FizzBuzz Kata');
      })
    }));

    it('should create the fizz-buzz component', fakeAsync(() => {
      create_app_component().then((app_component) => {
        const element = app_component.get_fizz_buzz();
        expect(element).toBeTruthy();
      })
    }));

    // it('should create the router-outlet', fakeAsync(() => {
    //   create_app_component().then((app_component) => {
    //   })
    // }));

    function create_app_component(): Promise<any> {
      return new Promise<any>((resolve) => {
        TestBed.configureTestingModule({
          imports: [AppModule]
        }).overrideModule(AppModule, {
          remove: {
            imports: [AppRoutingModule]
          },
          add: {
            imports: [RouterTestingModule]
          }
        }).overrideTemplate(MdToolbar, '<div><ng-content></ng-content></div>'
          ).compileComponents().then(() => {
            let app_component = TestBed.createComponent(AppComponent);
            resolve({
              get_toolbar_title: () => {
                app_component.detectChanges();
                let content = app_component.debugElement
                  .query(By.css('md-toolbar')).nativeElement
                  .textContent;
                return content;
              },
              get_fizz_buzz: () => {
                const fizz_buzzEl = app_component.debugElement
                  .query(By.css('mjs-fizz-buzz'));
                return fizz_buzzEl;
              },
              sub: app_component.componentInstance
            })
          });
      });
    }
  });
}
