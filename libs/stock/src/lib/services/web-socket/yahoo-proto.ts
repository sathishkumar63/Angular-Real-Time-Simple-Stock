/* tslint:disable */
import * as proto from 'protobufjs';

const $protobuf: any = proto;

export function getProtoRoot(): any {
  var $Reader = $protobuf.Reader,
    $util = $protobuf.util;

  var $root: any =
    $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

  $root.quotefeeder = (function () {
    var quotefeeder: any = {};

    quotefeeder.QuoteType = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'NONE')] = 0;
      values[(valuesById[5] = 'ALTSYMBOL')] = 5;
      values[(valuesById[7] = 'HEARTBEAT')] = 7;
      values[(valuesById[8] = 'EQUITY')] = 8;
      values[(valuesById[9] = 'INDEX')] = 9;
      values[(valuesById[11] = 'MUTUALFUND')] = 11;
      values[(valuesById[12] = 'MONEYMARKET')] = 12;
      values[(valuesById[13] = 'OPTION')] = 13;
      values[(valuesById[14] = 'CURRENCY')] = 14;
      values[(valuesById[15] = 'WARRANT')] = 15;
      values[(valuesById[17] = 'BOND')] = 17;
      values[(valuesById[18] = 'FUTURE')] = 18;
      values[(valuesById[20] = 'ETF')] = 20;
      values[(valuesById[23] = 'COMMODITY')] = 23;
      values[(valuesById[28] = 'ECNQUOTE')] = 28;
      values[(valuesById[41] = 'CRYPTOCURRENCY')] = 41;
      values[(valuesById[42] = 'INDICATOR')] = 42;
      values[(valuesById[1000] = 'INDUSTRY')] = 1000;
      return values;
    })();

    quotefeeder.MarketHours = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'PRE_MARKET')] = 0;
      values[(valuesById[1] = 'REGULAR_MARKET')] = 1;
      values[(valuesById[2] = 'POST_MARKET')] = 2;
      values[(valuesById[3] = 'EXTENDED_HOURS_MARKET')] = 3;
      return values;
    })();

    quotefeeder.OptionType = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'CALL')] = 0;
      values[(valuesById[1] = 'PUT')] = 1;
      return values;
    })();

    quotefeeder.PricingData = (function () {
      function PricingData(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }

      PricingData.prototype.symbol = '';
      PricingData.prototype.price = 0;
      PricingData.prototype.time = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.currency = '';
      PricingData.prototype.exchange = '';
      PricingData.prototype.quoteType = 0;
      PricingData.prototype.marketHours = 0;
      PricingData.prototype.changePercent = 0;
      PricingData.prototype.dayVolume = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.dayHigh = 0;
      PricingData.prototype.dayLow = 0;
      PricingData.prototype.change = 0;
      PricingData.prototype.displayName = '';
      PricingData.prototype.name = '';
      PricingData.prototype.expireDate = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.openPrice = 0;
      PricingData.prototype.previousClose = 0;
      PricingData.prototype.strikePrice = 0;
      PricingData.prototype.underlyingSymbol = '';
      PricingData.prototype.openInterest = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.optionsType = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.miniOption = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.lastSize = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.bid = 0;
      PricingData.prototype.bidSize = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.ask = 0;
      PricingData.prototype.askSize = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.priceHint = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.vol_24hr = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.volAllCurrencies = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.fromcurrency = '';
      PricingData.prototype.lastMarket = '';
      PricingData.prototype.circulatingSupply = 0;
      PricingData.prototype.marketcap = 0;

      PricingData.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.quotefeeder.PricingData();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.symbol = r.string();
              break;
            case 2:
              m.price = r.float();
              break;
            case 3:
              m.time = r.sint64();
              break;
            case 4:
              m.currency = r.string();
              break;
            case 5:
              m.exchange = r.string();
              break;
            case 6:
              m.quoteType = r.int32();
              break;
            case 7:
              m.marketHours = r.int32();
              break;
            case 8:
              m.changePercent = r.float();
              break;
            case 9:
              m.dayVolume = r.sint64();
              break;
            case 10:
              m.dayHigh = r.float();
              break;
            case 11:
              m.dayLow = r.float();
              break;
            case 12:
              m.change = r.float();
              break;
            case 13:
              m.displayName = r.string();
              break;
            case 14:
              m.expireDate = r.sint64();
              break;
            case 15:
              m.openPrice = r.float();
              break;
            case 16:
              m.previousClose = r.float();
              break;
            case 17:
              m.strikePrice = r.float();
              break;
            case 18:
              m.underlyingSymbol = r.string();
              break;
            case 19:
              m.openInterest = r.sint64();
              break;
            case 20:
              m.optionsType = r.sint64();
              break;
            case 21:
              m.miniOption = r.sint64();
              break;
            case 22:
              m.lastSize = r.sint64();
              break;
            case 23:
              m.bid = r.float();
              break;
            case 24:
              m.bidSize = r.sint64();
              break;
            case 25:
              m.ask = r.float();
              break;
            case 26:
              m.askSize = r.sint64();
              break;
            case 27:
              m.priceHint = r.sint64();
              break;
            case 28:
              m.vol_24hr = r.sint64();
              break;
            case 29:
              m.volAllCurrencies = r.sint64();
              break;
            case 30:
              m.fromcurrency = r.string();
              break;
            case 31:
              m.lastMarket = r.string();
              break;
            case 32:
              m.circulatingSupply = r.double();
              break;
            case 33:
              m.marketcap = r.double();
              break;
            case 34:
              m.name = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };

      return PricingData;
    })();

    return quotefeeder;
  })();

  return $root;
}
