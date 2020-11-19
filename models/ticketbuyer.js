'use strict';
const {
  Model
} = require('sequelize');
const { ticketCode, serialNumber } = require('../helpers/helper')
module.exports = (sequelize, DataTypes) => {
  class TicketBuyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TicketBuyer.belongsTo(models.Buyer)
      TicketBuyer.belongsTo(models.Ticket)
    }
  };
  TicketBuyer.init({
    BuyerId: DataTypes.INTEGER,
    TicketId: DataTypes.INTEGER,
    ticket_number: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(TicketBuyer) {
        TicketBuyer.ticket_number = ticketCode(TicketId.type) + serialNumber()
      }
    },
    sequelize,
    modelName: 'TicketBuyer',
  });
  return TicketBuyer;
};