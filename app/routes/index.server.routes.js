// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Define the routes module' method
module.exports = function (app) {

    app.get('/run', index.trainAndPredict);

};
