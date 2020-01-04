const axios = require('axios');

exports.handler = (event, context, callback) => {
    
    var base;
    var output;
    if (event.queryStringParameters && event.queryStringParameters.base) {
        console.log("Received base: " + event.queryStringParameters.base);
        base = event.queryStringParameters.base;
    }
    if (event.queryStringParameters && event.queryStringParameters.output) {
        console.log("Received output: " + event.queryStringParameters.output);
        output = event.queryStringParameters.output;
    }
    var final = {"base":base,"output":output}
     axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`).then((response) => {
        var data = response.data.rates[output]

        callback(null, { "statusCode" : 200, "body" : `Base Currency is ${base} and converted value for ${output} is ${JSON.stringify((data))}`});

    });
};
