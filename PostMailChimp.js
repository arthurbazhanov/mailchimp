const request = require("request-promise");

function addEmailToMailChimp(email) {

  const headers = {
    'cache-control': 'no-cache',
    Authorization: 'Basic YW55c3RyaW5nOjBlZDg2ZDZkNzg0NzA4MDkxMGMyNDNjOTUyMGUwZjk3LXVzMTk=',
    'Content-Type': 'application/json'
  };

  let options = {
    method: 'POST',
    url: 'https://us19.api.mailchimp.com/3.0/lists/5f51973c59/members',
    headers: headers,
    body: { email_address: email, status: 'subscribed' },
    json: true
  };

   request(options)
}

module.exports = addEmailToMailChimp;