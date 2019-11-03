const axios = require('axios');

exports.handler = (event, context, callback) => {
    
    axios.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees').then((response) => {
        
        var returnData = response.data.filter((employee) => {
            return employee.id == event.empid
        })
        
        callback(null, returnData[0])
    });
};
