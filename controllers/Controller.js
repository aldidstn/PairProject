const { Ticket,Buyer ,TicketBuyer } = require('../models')

class Controller {
    static loginForm(req, res) {
        res.render('login')
    }

    static registerForm(req, res) {
        res.render('register')
    }

    static showTicket(req, res) {
        Ticket.findAll()
            .then(data => {
                console.log(data);
                res.render('ticket', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static registerPostForm(req, res) {
        const { username, password, role } = req.body
        User.create({ username, password, role })
            .then(() => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postLogin(req, res) {
        const { username, password } = req.body

        User.findOne({ where: { username } })
            .then(user => {
                if (user) {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if (isValidPassword) {
                        return res.redirect('/')
                    } else {
                        const error = "invalid username or password"
                        return res.redirect(`/login?error=${error}`)
                    }
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('add-ticket')
    }
    static addPost(req, res) {
        let values = {
            event_name: req.body.event_name,
            event_date: req.body.event_date,
            type: req.body.type,
            price: req.body.price
        }
        Ticket.create(values)
            .then(() => {
                res.send('data nambah')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editForm(req, res) {
        const id = +req.params.id
        Ticket.findByPk(id)
            .then(ticket => {
                res.render('edit-ticket', { ticket })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static editPost(req, res) {
        const id = +req.params.id
        let values = {
            event_name: req.body.event_name,
            event_date: req.body.event_date,
            type: req.body.type,
            price: req.body.price
        }
        Ticket.update(values, { where: { id: id } })
            .then(data => {
                res.send('tes')
                // res.redirect('/tickets')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteTicket(req, res) {
        const id = +req.params.id
        Ticket.destroy({ where: { id: id } })
            .then((data) => {
                res.send('ok')
                // res.redirect('/tickets')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static buyTicket(req, res) {
        TicketBuyer.findAll({
            where: {
                TicketId 
            },
            include: ['Buyers']
        })
            .then(data => {
                console.log(data);
                res.render('buyer-ticket', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller