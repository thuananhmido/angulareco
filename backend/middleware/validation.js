const Joi = require("joi");

var options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const registerValidation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
  });

  return schema.validate(data, options);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
  });

  return schema.validate(data, options);
};

const updateUserValidation = (data) => {
  const schema = Joi.object({
    userId: Joi.string().required().strict(),
    email: Joi.string().email().required().strict(),
    password: Joi.string().min(6).required().strict(),
    fullName: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};
const addProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().strict(),
    image: Joi.string().required().strict(),
    description: Joi.string().required().strict(),
    price: Joi.string().required().strict(),
    quantity: Joi.string().required().strict(),
    cat_id: Joi.string().required().strict(),
  });

  return schema.validate(data, options);
};

module.exports = {
  registerValidation,
  loginValidation,
  updateUserValidation,
  addProduct,
};
