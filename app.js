const express = require('express')
const bodyParser = require('body-parser')

function app(models) {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.get('/api/users', (req, res) => {
    models.User.findAll().then(users => {
      if (users) res.status(200).json(users)
    }).catch(e => {
      res.status(500).json({ error: e, message: e.message })
    })
  })
  
  return app
}

module.exports = app;