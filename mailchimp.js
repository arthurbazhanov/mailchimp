'use strict';

const MailChimp = require('mailchimp-api-v3');
const api_key = '0ed86d6d7847080910c243c9520e0f97-us19';
const mailChimp = new MailChimp(api_key);
const list_id = '5f51973c59';


function addEmailToMailchimp(email) {

  mailChimp.post({
    path: `lists/${list_id}/members`,
    body: { email_address: email, status: 'subscribed' },
  })
    .then(results => console.log('Status', results.statusCode))
    .catch(error => console.log(error));
}

module.exports = addEmailToMailchimp;
