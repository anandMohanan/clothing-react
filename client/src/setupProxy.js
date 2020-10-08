const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use('/payment',createProxyMiddleware( { target: 'http://localhost:5000' }));
};