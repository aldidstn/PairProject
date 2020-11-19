'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Buyer.hasMany(models.TicketBuyer)
    }
  };
  Buyer.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required Name`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required Email`
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required Phone Number`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required Username`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required Password`
        },
        isWeak(value) {
          if (value < 5) throw new Error(`Minimal password is 5`)
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Buyer',
  });
  return Buyer;
};