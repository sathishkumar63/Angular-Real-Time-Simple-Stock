# Real Time Yahoo Finance Simple Stock.

This project was generated using [Nx](https://nx.dev).

## Demo Link

[https://sathishkumar63.github.io/Angular-Real-Time-Simple-Stock/stocks](https://sathishkumar63.github.io/Angular-Real-Time-Simple-Stock/stocks)

### Functionality

- Implemented Web Socket service which pushes stock prices to the UI
- Implemented real-time price updates for these stocks ( amazon, apple, google,
  microsoft, tesla). Data is retrieved from https://finance.yahoo.com/ (i.e.:
  https://finance.yahoo.com/quote/AAPL/)
- Implemented toggling/disabling (disable/gray out/switch off stock)
- Implemented a responsive design.

 ## Data displayed in mobile view:

1. current price
2. daily high price
3. daily low price
4. name

## Data displayed in desktop view

1. current price
2. daily high price
3. daily low price
4. name
5. 52 week high price
6. 52 week low price

### Prerequisite

Install angular cli version >=10.1.7 and node version >=v12.22.12

```
$ npm i -g @angular/cli
```

### Install the dependencies.

```
$ npm install
```

### Development server

Run `ng serve stocks`. Navigate to http://localhost:4200/stocks.
