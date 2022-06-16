import * as proto from 'protobufjs';

// https://finance.yahoo.com/__finStreamer-proto.js

const $protobuf: any = proto;

export function getProtoRoot(): any {
  var $Reader = $protobuf.Reader,
    $util = $protobuf.util;

  var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

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

    quotefeeder.PricingData = (function () {
      function PricingData(p) {
        if (p)
          for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
            if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }

      PricingData.prototype.id = '';
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
      PricingData.prototype.shortName = '';
      PricingData.prototype.displayName = '';
      PricingData.prototype.openPrice = 0;
      PricingData.prototype.strikePrice = 0;
      PricingData.prototype.underlyingSymbol = '';
      PricingData.prototype.priceHint = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.vol_24hr = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;
      PricingData.prototype.volAllCurrencies = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      PricingData.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.quotefeeder.PricingData();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
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
              m.shortName = r.string();
              break;
            case 14:
              m.displayName = r.string();
              break;
            case 15:
              m.openPrice = r.float();
              break;
            case 16:
              m.symbol = r.string();
              break;
            case 17:
              m.strikePrice = r.float();
              break;
            case 18:
              m.underlyingSymbol = r.string();
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
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };

      PricingData.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d: any = {};
        if (o.defaults) {
          d.id = '';
          d.symbol = '';
          d.price = 0;
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.time =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.time = o.longs === String ? '0' : 0;
          d.currency = '';
          d.exchange = '';
          d.quoteType = o.enums === String ? 'NONE' : 0;
          d.marketHours = o.enums === String ? 'PRE_MARKET' : 0;
          d.changePercent = 0;
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.dayVolume =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.dayVolume = o.longs === String ? '0' : 0;
          d.dayHigh = 0;
          d.dayLow = 0;
          d.change = 0;
          d.shortName = '';
          d.displayName = '';
          d.openPrice = 0;
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.priceHint =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.priceHint = o.longs === String ? '0' : 0;
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.vol_24hr =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.vol_24hr = o.longs === String ? '0' : 0;
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.volAllCurrencies =
              o.longs === String
                ? n.toString()
                : o.longs === Number
                ? n.toNumber()
                : n;
          } else d.volAllCurrencies = o.longs === String ? '0' : 0;
        }
        if (m.id != null && m.hasOwnProperty('id')) {
          d.id = m.id;
        }
        if (m.symbol != null && m.hasOwnProperty('symbol')) {
          d.symbol = m.symbol;
        }
        if (m.price != null && m.hasOwnProperty('price')) {
          d.price = o.json && !isFinite(m.price) ? String(m.price) : m.price;
        }
        if (m.time != null && m.hasOwnProperty('time')) {
          if (typeof m.time === 'number')
            d.time = o.longs === String ? String(m.time) : m.time;
          else
            d.time =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.time)
                : o.longs === Number
                ? new $util.LongBits(
                    m.time.low >>> 0,
                    m.time.high >>> 0
                  ).toNumber()
                : m.time;
        }
        if (m.currency != null && m.hasOwnProperty('currency')) {
          d.currency = m.currency;
        }
        if (m.exchange != null && m.hasOwnProperty('exchange')) {
          d.exchange = m.exchange;
        }
        if (m.quoteType != null && m.hasOwnProperty('quoteType')) {
          d.quoteType =
            o.enums === String
              ? $root.quotefeeder.QuoteType[m.quoteType]
              : m.quoteType;
        }
        if (m.marketHours != null && m.hasOwnProperty('marketHours')) {
          d.marketHours =
            o.enums === String
              ? $root.quotefeeder.MarketHours[m.marketHours]
              : m.marketHours;
        }
        if (m.changePercent != null && m.hasOwnProperty('changePercent')) {
          d.changePercent =
            o.json && !isFinite(m.changePercent)
              ? String(m.changePercent)
              : m.changePercent;
        }
        if (m.dayVolume != null && m.hasOwnProperty('dayVolume')) {
          if (typeof m.dayVolume === 'number')
            d.dayVolume =
              o.longs === String ? String(m.dayVolume) : m.dayVolume;
          else
            d.dayVolume =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.dayVolume)
                : o.longs === Number
                ? new $util.LongBits(
                    m.dayVolume.low >>> 0,
                    m.dayVolume.high >>> 0
                  ).toNumber()
                : m.dayVolume;
        }
        if (m.dayHigh != null && m.hasOwnProperty('dayHigh')) {
          d.dayHigh =
            o.json && !isFinite(m.dayHigh) ? String(m.dayHigh) : m.dayHigh;
        }
        if (m.dayLow != null && m.hasOwnProperty('dayLow')) {
          d.dayLow =
            o.json && !isFinite(m.dayLow) ? String(m.dayLow) : m.dayLow;
        }
        if (m.change != null && m.hasOwnProperty('change')) {
          d.change =
            o.json && !isFinite(m.change) ? String(m.change) : m.change;
        }
        if (m.shortName != null && m.hasOwnProperty('shortName')) {
          d.shortName = m.shortName;
        }
        if (m.displayName != null && m.hasOwnProperty('displayName')) {
          d.displayName = m.displayName;
        }
        if (m.openPrice != null && m.hasOwnProperty('openPrice')) {
          d.openPrice =
            o.json && !isFinite(m.openPrice)
              ? String(m.openPrice)
              : m.openPrice;
        }
        if (m.strikePrice != null && m.hasOwnProperty('strikePrice')) {
          d.strikePrice =
            o.json && !isFinite(m.strikePrice)
              ? String(m.strikePrice)
              : m.strikePrice;
        }
        if (
          m.underlyingSymbol != null &&
          m.hasOwnProperty('underlyingSymbol')
        ) {
          d.underlyingSymbol = m.underlyingSymbol;
        }
        if (m.priceHint != null && m.hasOwnProperty('priceHint')) {
          if (typeof m.priceHint === 'number')
            d.priceHint =
              o.longs === String ? String(m.priceHint) : m.priceHint;
          else
            d.priceHint =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.priceHint)
                : o.longs === Number
                ? new $util.LongBits(
                    m.priceHint.low >>> 0,
                    m.priceHint.high >>> 0
                  ).toNumber()
                : m.priceHint;
        }
        if (m.vol_24hr != null && m.hasOwnProperty('vol_24hr')) {
          if (typeof m.vol_24hr === 'number')
            d.vol_24hr = o.longs === String ? String(m.vol_24hr) : m.vol_24hr;
          else
            d.vol_24hr =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.vol_24hr)
                : o.longs === Number
                ? new $util.LongBits(
                    m.vol_24hr.low >>> 0,
                    m.vol_24hr.high >>> 0
                  ).toNumber()
                : m.vol_24hr;
        }
        if (
          m.volAllCurrencies != null &&
          m.hasOwnProperty('volAllCurrencies')
        ) {
          if (typeof m.volAllCurrencies === 'number')
            d.volAllCurrencies =
              o.longs === String
                ? String(m.volAllCurrencies)
                : m.volAllCurrencies;
          else
            d.volAllCurrencies =
              o.longs === String
                ? $util.Long.prototype.toString.call(m.volAllCurrencies)
                : o.longs === Number
                ? new $util.LongBits(
                    m.volAllCurrencies.low >>> 0,
                    m.volAllCurrencies.high >>> 0
                  ).toNumber()
                : m.volAllCurrencies;
        }
        return d;
      };

      PricingData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return PricingData;
    })();

    return quotefeeder;
  })();

  return $root;
}
