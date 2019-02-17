echo "export SENDGRID_API_KEY='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'" > sendgrid.env;
echo "sendgrid.env" >> .gitignore;
source ./sendgrid.env


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.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);
const msg = {
  to: 'sully8899@gmail.com',
  from: 'sulai3030@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);