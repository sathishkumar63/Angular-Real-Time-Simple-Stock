import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  isMobile$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeViewPort();
  }

  //https://material.angular.io/cdk/layout/overview
  observeViewPort() {
    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.XSmall])
      .pipe(map((result: BreakpointState) => result.matches));
  }
}
