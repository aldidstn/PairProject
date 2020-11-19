'use strict';

const { query } = require('express');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = require('../ticket.json')
    data.forEach(el => {
      el.createdAt = new Date(),
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Tickets', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', {})
  }
};
