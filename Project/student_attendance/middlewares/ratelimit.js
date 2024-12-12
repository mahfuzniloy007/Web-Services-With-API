const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit ({
    windows: 1 * 60 * 1000, //1 minute
    max: 15, 
    message: 'Too many requests. Please try again later.',
});

module.exports = apiLimiter;