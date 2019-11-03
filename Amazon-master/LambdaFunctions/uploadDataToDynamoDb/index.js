const axios = require('axios');
const aws = require('aws-sdk');

const docClient = new aws.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {

    axios.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees').then((response) => {

        let employeeList = response.data;

        employeeList.map((employee) => {
            var params = {
                Item: {
                    "id": employee.id,
                    "createdAt": employee.createdAt,
                    "name": employee.name,
                    "avatar": employee.avatar
                },
                TableName: 'musicApplicationData'
            }
    
            docClient.put(params, (err, data) => {
                if (err) {
                    callback(err, null);
                }
            });
        });

        callback(null, "Data Load In Progress")

        
    });
}
