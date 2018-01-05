const bittrex = require('node-bittrex-api');
const config = require('./config.json');

bittrex.options({
  'apikey' : config.apiKey,
  'apisecret' : config.apiSecret,
});


// Get currency specific balance
bittrex.getbalance({ currency : 'BTC' }, function( data, err ) {
  if (err) {
    return console.error(err);
  }
  console.log( data );
});

// Get all balances
bittrex.getbalances(function( data, err ) {
  if (err) {
    return console.error(err);
  }
  console.log( data );
});
