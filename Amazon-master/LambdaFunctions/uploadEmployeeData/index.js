const axios = require('axios');
const aws = require('aws-sdk');

const docClient = new aws.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {

    axios.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees').then((response) => {

        var params = {
            Item: {
                "id":"1",
                "createdAt":"2018-12-03T11:37:42.015Z",
                "name":"Ms. Gaylord Streich",
                "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"
            },
            TableName: 'musicApplicationData'
        }

        docClient.put(params, (err, data) => {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, "Data Load In Progress")
            }
        });
    });
}
