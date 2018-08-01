const twilio = require('twilio');

const accountSid = 'ACbf91a22cb143cacb3c1830c30d77e28d';
const authToken = '249d66e8192ff805d04b1e8fd88df02f';

module.exports = new twilio.Twilio(accountSid, authToken);
