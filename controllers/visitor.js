const Visitor = require("../models/Visitor");
const moment = require('moment-timezone');

module.exports.saveVisitorDetails = (req, res) => {

    const details = {
        name: req.body.name,
        emailAddress: req.body.emailAddress,
        contactNo: req.body.contactNo,
        message: req.body.message,
        sentOn: moment().tz('Asia/Manila').toDate()
    }

    const form = new Visitor(details);
    form.save()
        .then(() => res.send(true))
        .catch((err) => res.status(500).send(false));
};