

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const PORT = process.env.PORT || 5000;
var AWS = require('aws-sdk');
var app = express();

app.use(express.static(path.join(__dirname, 'src')));
// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index.ejs'));

//app.post('/enter', function(req, res) {
  ////////////
  /*
  res.send('success');
  var AWS = require('aws-sdk');
  AWS.config.update({
    accessKeyId: "AKIAIWBC6NAV7LWTHVRA",
    secretAccessKey: "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",
    region: 'us-east-1'
  });
  var ses_mail = "From: 'AWS SES Attchament Configuration' <" + 'mail@aaaidphoto.com' + ">\n";
    ses_mail += "--NextPart--";

  var params = {
    Destinations: ['phonofixbu@gmail.com'],
    RawMessage: {
      Data: ses_mail,
    },
    Source: 'jessepelzar@gmail.com',
  };
  new AWS.SES({
    apiVersion: '2010-12-01'
  }).sendRawEmail(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
      alert("Email failed to send, Please make sure you enter a valid email address.")
      // spawn resend email button display: block in css display: none
      //set onclick of that button to generate_email
    }
    else {
      console.log(data);
      switch_to_receipt();
    }

  });
  */
  /////////////
//   //function generate_email() {
//     console.log('fieeuiv');
//     var emailAddress = "phonofixbu@gmail.com";
//     //var AWS = require('aws-sdk');
//     var AWS = require('./email.js');
//     AWS.config.update({
//       accessKeyId: "AKIAIWBC6NAV7LWTHVRA",
//       secretAccessKey: "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",
//       region: 'us-east-1'
//     });
//
//     var params = {
//       Destination: { /* required */
//         CcAddresses: [],
//         ToAddresses: [
//           emailAddress,
//           /* more items */
//         ]
//       },
//       Message: { /* required */
//         Body: { /* required */
//           Html: {
//             Charset: "UTF-8",
//             Data: "Thank you for shopping with AAAID. Your order is now being processed. If you have any questions feel free to call 9172995672."
//           },
//           Text: {
//             Charset: "UTF-8",
//             Data: "TEXT_FORMAT_BODY"
//           }
//         },
//         Subject: {
//           Charset: 'UTF-8',
//           Data: 'Order Confirmation'
//         }
//       },
//       Source: 'jessepelzar@gmail.com',
//       /* required */
//       ReplyToAddresses: [
//         emailAddress
//         //'mail@aaaidphoto.com',
//         /* more items */
//       ],
//     };
//
//
//     var sendPromise = new AWS.SES({
//       apiVersion: '2010-12-01'
//     }).sendEmail(params).promise();
//
//
//     sendPromise.then(
//       function(data) {
//         console.log(data.MessageId);
//         generate_email();
//       }).catch(
//       function(err) {
//         console.error(err, err.stack);
//         alert("The receipt email did not send, please try again.");
//         // spawn resend email button display: block in css display: none
//         //set onclick of that button to generate_receipt
//       });
//       alert("success");
//   //}
//});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
