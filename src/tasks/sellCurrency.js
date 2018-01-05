const _ = require('lodash');
const bittrex = require('node-bittrex-api');
const config = require('./config.json');

bittrex.options({
  'apikey' : config.apiKey,
  'apisecret' : config.apiSecret,
});

const sellData = require('./sell.json');
const sellOrders = sellData.sellOrders;
const receiveCurrency = sellData.receiveCurrency;

_.forEach(sellOrders, order => {
  const { symbol, quantity, rate } = order;

  //TODO: Do validations on symbol and quantity
  const market = `${receiveCurrency}-${symbol}`;
  bittrex.selllimit({
    market,
    quantity,
    rate
  }, (err, data) => {
    if (err) {
      console.log('Error');
      console.log(err);
    } else {
      console.log('Success');
      console.log(data);
    }
  });
});