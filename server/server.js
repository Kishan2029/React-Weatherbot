// Import the packages we need
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();
const express = require('express');
var cors = require('cors');
var util = require('util');
const protobuf = require('protobufjs');


// Your credentials
// const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Other way to read the credentials
const fs = require('fs');
const CREDENTIALS = JSON.parse(fs.readFileSync('/Users/kishanprajapati/web-chatbot/server/weatherbot-9jek-3e6b7273ca8d.json'));

// Your google dialogflow project-id
const PROJECID = CREDENTIALS.project_id;
console.log(PROJECID);

// Configuration for the client
const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

// Create a new session
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

// Detect intent method
const detectIntent = async (languageCode, queryText, sessionId) => {

    let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);

    // The text query request.
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: queryText,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log("Typeof",typeof(responses));

    // console.log("Response:",responses[0].queryResult.fulfillmentMessages[0]);
    const result = responses[0].queryResult;
    // console.log("result:",result);
    // const resultMessage = responses[0].queryResult.fulfillmentMessages[1].payload;
    console.log("Chips:",result);

    return {
        response: result.fulfillmentText,
        response1:result
        // response:resultMessage
    };
}
//detect Intent with Response
// async function detectIntentwithTTSResponse(languageCode, query, sessionId) {
//     let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);
//     // The audio query request
//     const request = {
//       session: sessionPath,
//       queryInput: {
//         text: {
//           text: query,
//           languageCode: languageCode,
//         },
//       },
//       outputAudioConfig: {
//         audioEncoding: 'OUTPUT_AUDIO_ENCODING_LINEAR_16',
//       },
//     };
//     sessionClient.detectIntent(request).then(responses => {
//       console.log('Detected intent:');
//       const audioFile = responses[0].outputAudio;
//       util.promisify(fs.writeFile)(outputFile, audioFile, 'binary');
//       console.log(`Audio content written to file: ${outputFile}`);
//     });
//   }
//   detectIntentwithTTSResponse('en', 'Whats the weather in mumbai', 'abcd1234');

// detectIntent('en', 'Whats the weather in mumbai', 'abcd1234');

// Start the webapps
const webApp = express();
webApp.use(cors());
// Webapp settings
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

// Server Port
const PORT = process.env.PORT || 3000;

// Home route
webApp.get('/api', (req, res) => {
    res.json({"users":"one"});
});

// Dialogflow route
webApp.post('/dialogflow', async (req, res) => {

    let languageCode = req.body.languageCode;
    let queryText = req.body.queryText;
    let sessionId = req.body.sessionId;
    // console.log(languageCode);
    let responseData = await detectIntent(languageCode, queryText, sessionId);
    // console.log("/dialogflow response:",responseData);
    res.send(responseData.response1);
});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});