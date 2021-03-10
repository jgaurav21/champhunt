const { body, validationResult } = require("express-validator");

const userValidationRule = function (param) {
  switch (param) {
    case "postUser":
      return [
        body("mobile")
          .notEmpty()
          .isLength({ min: 10, max: 10 })
          .withMessage("Valid mobile number with 10 digits is required"),
        body("password")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Valid Password is required with 6 characters"),
        body("password2")
          .notEmpty()
          .isLength({ min: 6 })
          .withMessage("Valid password is required 6 characters"),
      ];
  }
};

const userValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  // errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  errors.array().map((err) => extractedErrors.push({ msg: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRule,
  userValidate,
};
