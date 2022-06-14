import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import { catchError, delayWhen, retryWhen, share, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/websocket';
import { getProtoRoot } from './yahoo-proto';

const { quotefeeder } = getProtoRoot();

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  websocket$: WebSocketSubject<any>;
  socket$: Observable<any>;
  socketOpen$: Subject<Event> = new Subject<Event>();
  socketClose$: Subject<Event> = new Subject<Event>();

  constructor() {}

  connect() {
    if (!this.socket$) {
      this.websocket$ = webSocket({
        closeObserver: this.socketClose$,
        deserializer: (result) => {
          try {
            const buffer = this.base64ToArray(result.data);
            return quotefeeder.PricingData.decode(buffer);
          } catch (e) {
            return {};
          }
        },
        openObserver: this.socketOpen$,
        url: 'wss://streamer.finance.yahoo.com/',
      });
      this.socket$ = this.websocket$.pipe(
        this.reconnect,
        share(),
        catchError(() => EMPTY)
      );
    }

    return this.socket$;
  }

  send(symbol: string[]) {
    this.websocket$.next({ subscribe: symbol });
  }

  unsubscribe(symbol: string[]) {
    this.websocket$.next({ unsubscribe: symbol });
  }

  reconnect(observable: Observable<any>) {
    return observable.pipe(
      retryWhen((errors) => errors.pipe(delayWhen((_) => timer(2000))))
    );
  }

  base64ToArray(base64) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
