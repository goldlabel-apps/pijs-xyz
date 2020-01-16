const packageJSON = require("../package.json");
const functions = require("firebase-functions");
const moment = require("moment");

exports.app = functions.https.onRequest((req, res) => {
  const mode = `json`;
  if (mode === `json`) {
    const epoch = Date.now();
    const r = {
      name: packageJSON.name,
      version: packageJSON.version,
      description: packageJSON.description,
      time: moment(epoch).format(`ddd, MMM Do, h:mm a`),
      epoch,
      data: [
        {
          title: `Firebase Cloud functions`,
          type: `paragraph`,
          body: `Cloud Functions for Firebase let you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.`,
          link: `https://firebase.google.com/docs/functions`
        }
      ],
      errors: [
        {
          code: `E0001`,
          problem: `No request`,
          action: `make a request as you would to a REST API`
        }
      ]
    };
    res.setHeader(`Content-Type`, `application/json`);
    res.send(JSON.stringify(r, null, 3));
  }
});
