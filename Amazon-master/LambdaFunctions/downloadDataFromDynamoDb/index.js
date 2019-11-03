const axios = require('./node_modules/axios');
const aws = require('./node_modules/aws-sdk');

const docClient = new aws.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {

    var scanningParameter = {
        TableName: 'musicApplicationData',
        Limit: 100
    }

    docClient.scan(scanningParameter, (error, data) => {
        if(error) {
            callback(error, null)
        } else {
            callback(null, data)
        }
    });
}
