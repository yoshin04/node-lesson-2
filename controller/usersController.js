const { validationResult } = require('express-validator');

module.exports = {
  new: (req, res) => {
    res.render('users/new', {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      errorMessages: errorMessages,
      errorMessages: '',
    });
  },
  create: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errorMessages = errors.array();
      return res.render('users/new', {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        errorMessages: errorMessages,
      });
    }
    return res.render('users/index', {
      name: req.body.name,
    });
  },
};
