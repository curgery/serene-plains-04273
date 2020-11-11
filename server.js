const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const uri =
  process.env.MONGODB_URI || 'lyrical-songs.c4knq.mongodb.net:27017';

  const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db('heroku_36qnrfsm');
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
    process.exit(1);
  }
};
app.get('/api/articles/:name', async (req, res) => {
  withDB(async db => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  withDB(async db => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1
        }
      }
    );
    const updatedArticleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async db => {
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text })
        }
      }
    );
    const updatedArticleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
