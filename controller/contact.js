// create a reference to the model
let ContactModel = require('../models/contact');

module.exports.contactList = function (req, res, next) {
    ContactModel.find((err, contactList) => {
        //console.log(contactList);
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contact/list', {
                title: 'Contact List',
                ContactList: contactList,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {

    let id = req.params.id;

    ContactModel.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contact/add_edit', {
                title: 'Edit Contact',
                contact: contactToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedContact = ContactModel({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    ContactModel.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contact/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    ContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/contact/list');
        }
    });

}


module.exports.displayAddPage = (req, res, next) => {

    let newContact = ContactModel();

    res.render('contact/add_edit', {
        title: 'Add a new Contact',
        contact: newContact,
        userName: req.user ? req.user.username : ''
    })

}

module.exports.processAddPage = (req, res, next) => {

    let newContact = ContactModel({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    ContactModel.create(newContact, (err, contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            console.log(contact);
            res.redirect('/contact/list');
        }
    });

}