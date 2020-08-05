const questions = require('./questions.json');
const question = require('./question.json');
const questionAndAnswer = require('./questionAndAnswer.json');
const answer = require('./answer.json');
const answersagree = require('./answersagree.json');
const api = require('./api.json');
const tagHot = require('./tagHot.json');
const image = require('./image.json');
const answers = require('./answers.json');
const userNew = require('./userNew.json');
const userOld = require('./userOld.json');
const approval = require('./approval.json');
module.exports = {
  port: 8088,
  proxy: {
    '/api1': {
      target: 'https://wx.redrock.team/wxapi/seniorhelpme2020/', //对应自己的接口
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api1': '',
      },
    },
  },
  before(app) {
    // questions
    app.get('/api/questions', (req, res) => {
      res.json(questions);
    });
    app.post('/api/questions', (req, res) => {
      res.sendStatus(201);
      res.json(question);
    });
    app.get('/api/questions/id', (req, res) => {
      res.json(questionAndAnswer);
    });
    app.get('/api/questions/tag', (req, res) => {
      res.json(questions);
    });
    app.patch('/api/questions/*', (req, res) => {
      res.sendStatus(201);
      res.json(question);
    });
    app.delete('/api/questions/*', (req, res) => {
      res.sendStatus(204);
      res.text('');
    });

    // 回答
    app.post('/api/questions/*/answer', (req, res) => {
      res.sendStatus(201);
      res.json(answer);
    });

    app.delete('/api/answers/*', (req, res) => {
      res.sendStatus(204);
      res.text('');
    });

    app.post('/api​/answers​/*/approval', (req, res) => {
      res.json(api);
    }),
      app.post('​/api/answers​/*/oppose', (req, res) => {
        res.json(api);
      });

    // tags
    app.get('/api/tags/hot', (req, res) => {
      res.json(tagHot);
    });

    // 图片
    app.post('/api/image', (req, res) => {
      res.sendStatus(201);
      res.json(image);
    });

    app.post('/api/image/delete', (req, res) => {
      res.sendStatus(204);
      res.text('/api');
    });

    // 用户
    app.get('/api/user/questions', (req, res) => {
      res.json(questions);
    });

    app.get('/api/user/answers', (req, res) => {
      res.json(answers);
    });
    app.get('/api/user/answersagree', (req, res) => {
      res.json(answersagree);
    });

    app.get('/api/user/info', (req, res) => {
      res.json(userOld);
    });
    app.get('/api/user/comment', (req, res) => {
      res.json(answers);
    });
    app.get('/api/user/approval', (req, res) => {
      res.json(approval);
    });
  },
};
