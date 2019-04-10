import Joi from 'joi';

const encryptSchema = Joi.object({
  text: Joi.string().required(),
  iv: Joi.string().required(),
  salt: Joi.string().required(),
});

const decrytSchema = Joi.object({
  text: Joi.string().required(),
  iv: Joi.string().required(),
  salt: Joi.string().required(),
});

const hashCreateSchema = Joi.object({
  text: Joi.string().required(),
});

const hashCompareSchema = Joi.object({
  text: Joi.string().required(),
  hash: Joi.string().required(),
});

export {
  encryptSchema,
  decrytSchema,
  hashCreateSchema,
  hashCompareSchema,
}