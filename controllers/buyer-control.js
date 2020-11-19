const { Op } = require('sequelize')
const { Buyer } = require('../models')

class BuyerControl {
  static showBuyer(req, res) {
    Buyer.findAll({
      where: {
        id: {
          [Op.gt]: 1
        }
      }
    })
      .then(data => {
        res.render('buyer-list', { data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static addForm(req, res) {
    res.render('add-form')
  }

  static created(req, res) {
    let data = {
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      username: req.body.username,
      password: req.body.password
    }

    Buyer.create(data)
      .then(() => {
        res.redirect('/buyers')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static editForm(req, res) {
    const id = +req.params.id
    Buyer.findByPk(id)
      .then(data => {
        res.render('edit-form', { data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static edit(req, res) {
    const id = +req.params.id
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number
    }
    Buyer.update(data, {
      where: {
        id
      }
    })
      .then(() => {
        res.redirect('/buyers')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static delete(req, res) {
    const id = +req.params.id
    Buyer.destroy({
      where: {
        id
      }
    })
      .then(() => {
        res.redirect('/buyers')
      })
      .catch(err => {
        res.send(err)
      })
  }


}

module.exports = BuyerControl