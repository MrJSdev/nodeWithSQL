const Sequelize = require('sequelize')
const {sequelize}  = require('../config')
const BlogPost = sequelize.define('new_users', {
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  position: {
    type: Sequelize.STRING
  }
})

module.exports = {BlogPost}
