const functions = require('firebase-functions');
const emoji = require('node-emoji');
const axios = require('axios');

const ENVIROMENTS = functions.config()

exports.emoji = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json(emoji.random());
});


exports.postman = functions.https.onRequest((request, response) => {
  if(request.method !== "POST"){
    response.status(400).send('Please send a POST request');
    return;
  }

  const { name } = request.body
  response.json({ greeting: `Hi ${name}` });
});


exports.dogs = functions.https.onRequest(async (req, res) => {
  const apiRoot = 'https://api.unsplash.com';
  const accessKey = ENVIROMENTS.unsplash.key;

  const collections = `collections='3816141,1154337,1254279'`;
  const clientId = `client_id=${accessKey}`;
  const doggoEndpoint = `${apiRoot}/photos/random?${clientId}&count=${10}&${collections}`;

  try {
    const { data } = await axios.get(doggoEndpoint);
    res.json({ images: data })
  } catch (error) {
    res.status(500).send(error);
  }
})
