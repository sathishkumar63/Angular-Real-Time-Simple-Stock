import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import { catchError, delayWhen, retryWhen, share } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { IStock, QUOTE_STREAMER_WEBSOCKET } from '../../models';
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
            const decoded = quotefeeder.PricingData.decode(buffer);
            const stockObj = quotefeeder.PricingData.toObject(decoded, {
              enums: String,
            });
            console.log(stockObj);
            return this.formatStreamData(stockObj);
          } catch (e) {
            return {};
          }
        },
        openObserver: this.socketOpen$,
        url: QUOTE_STREAMER_WEBSOCKET,
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

  /**
   * Helper function to convert a base 64 string into a bytes array
   * @param {String} base64 a string in base 64
   */
  base64ToArray(base64: string) {
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  /**
   * Helper function to trim a float number to a given places (toFixed returns string)
   * @param {Number} val value to be trimmed
   * @param {Number} place how many digits you need after decimal point.
   */
  getFixedNumber(val: number, place: number) {
    if (isNaN(val)) {
      return val;
    }
    const pow = Math.pow(10, place);
    return +(Math.round(val * pow) / pow);
  }

  formatStreamData(stock: any): IStock {
    if (stock) {
      return {
        name: stock.displayName || stock.id,
        symbol: stock.id,
        currentPrice: this.getFixedNumber(stock.price, 2),
      };
    }
  }
}
