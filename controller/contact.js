// create a reference to the model
let ContactModel = require('../models/contact');

module.exports.contactList = function (req, res, next) {
    ContactModel.find((err, contactList) => {
        //console.log(inventoryList);
        if (err) {
            return console.error(err);
        }
        else {
            res.render('inventory/list', {
                title: 'Inventory List',
                InventoryList: inventoryList,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}
