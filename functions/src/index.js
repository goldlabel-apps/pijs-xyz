const packageJSON = require('../package.json');
const functions = require('firebase-functions');
const moment = require('moment');

exports.app = functions.https.onRequest((req, res) => {
    let mode = `json`;
    if (mode === `json`) {
        const epoch = Date.now();
        const r = {
            app: `wordpress-node`,
            version: packageJSON.version,
            serverTime: moment(epoch).format(`ddd, MMM Do, h:mm a`),
            data: [
                {
                    title: `Node`,
                    type: `paragraph`,
                    body: `Find out about Node JS`,
                    link: `https://nodejs.org/en/about`
                },
            ],
            errors: [
                {
                    code: `e0001`,
                    problem: `Setup required`,
                    action: `Add WordPress Sites`,
                }
            ],
        }
        res.setHeader(`Content-Type`, `application/json`);
        res.send(JSON.stringify(r, null, 3))
    }
    if (mode === `html`) {
        res.send(`<html>please set url<html>`)
    }
});

/*
    function prepareJSON(options) {
        let returnString = `erm, yes`;
        return returnString;
    }
*/
