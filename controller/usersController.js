const { validationResult } = require('express-validator');

let errorMessageParams = ``;

module.exports = {
  new: (req, res) => {
    res.render('users/new', {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      errorMessages: errorMessageParams,
    });
  },
  create: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errorMessages = errors.array();
      errorMessageParams = errorMessages;
      return res.redirect('/users/new');
    }
    return res.render('users/index', {
      name: req.body.name,
    });
  },
};
