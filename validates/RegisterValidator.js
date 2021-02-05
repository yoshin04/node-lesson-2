const { check } = require('express-validator');

module.exports = [
  check('name').notEmpty().withMessage('名前を入力してください。'),
  check('email').isEmail().withMessage('メールアドレスを入力してください。'),
  check('password')
    .notEmpty()
    .isLength({ min: 7 }).withMessage('パスワードは７文字以上で入力してください。')
    .custom((value, { req }) => {
      if (req.body.password !== req.body.passwordConfirm) {
        throw new Error('パスワードが一致しません。');
      }
      return true;
    }),
];
