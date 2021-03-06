const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginStudent(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.usn = !isEmpty(data.usn) ? data.usn.toLowerCase() : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
  if (Validator.isEmpty(data.usn)) {
    errors.usn = "USN field is required";
  } else if (!Validator.isAlphanumeric(data.usn)) {
    errors.usn = "USN is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
