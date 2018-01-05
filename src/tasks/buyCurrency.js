const _ = require('lodash');
const bittrex = require('node-bittrex-api');
const config = require('./config.json');

bittrex.options({
  'apikey' : config.apiKey,
  'apisecret' : config.apiSecret,
});

const purchaseData = require('./buy.json');
const buyOrders = purchaseData.purchaseOrders;
const purchaseCurrency = purchaseData.purchaseCurrency;

_.forEach(buyOrders, order => {
  const { symbol, quantity, rate } = order;

  //TODO: Do validations on symbol and quantity
  const market = `${purchaseCurrency}-${symbol}`;
  bittrex.buylimit({
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
