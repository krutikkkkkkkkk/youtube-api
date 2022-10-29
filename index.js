import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000 || process.env.PORT;

//api to get video data from youtube channel without api key and return it to the client
app.get('/api/videos', async (req, res) => {
    const { channelId } = req.query;
    const url = `https://www.youtube.com/channel/${channelId}/videos`;
    const response = await fetch(url);
    const text = await response.text();
    const data = text.split('var ytInitialData = ')[1].split(';</script>')[0];
    res.json(JSON.parse(data));
});




app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })