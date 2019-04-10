import Joi from 'joi';
import HTTPstatus from 'http-status';
import Service from './service';
import { 
  encryptSchema,
  decrytSchema,
  hashCompareSchema,
  hashCreateSchema,
} from './schema';

const serviceSecurity = new Service();
const optionsSchemaValidate = {
  abortEarly: true,
  noDefaults: true,
};

/**
 * @description Function to data encrypt
 */
export const encrypt = (req, res) => {
  const data = req.body;
  const { error } = Joi.validate(data, encryptSchema, optionsSchemaValidate);

  if(!error) {
    return res.status(HTTPstatus.OK).json({
      encrypted: serviceSecurity.encrypt(data),
    })
  } else {
    const errors = error.details.map((item) => ({
      message: item.message,
    }));

    return res.status(HTTPstatus.CONFLICT).json({
      errors
    })
  }
};

/**
 * @description Function to data decrypt
 */
export const decrypt = (req, res) => {
  const data = req.body;
  const { error } = Joi.validate(data, decrytSchema, optionsSchemaValidate);

  if(!error) {
    return res.status(HTTPstatus.OK).json({
      decrypted: serviceSecurity.decrypt(data),
    })
  } else {
    const errors = error.details.map((item) => ({
      message: item.message,
    }));

    return res.status(HTTPstatus.CONFLICT).json({
      errors
    })
  }
};

/**
 * @description Function to create hash
 */
export const hash = (req, res) => {
  const data = req.body;
  const { error } = Joi.validate(data, hashCreateSchema, optionsSchemaValidate);

  if(!error) {
    return res.status(HTTPstatus.OK).json({
      decrypted: serviceSecurity.hash(data),
    })
  } else {
    const errors = error.details.map((item) => ({
      message: item.message,
    }));

    return res.status(HTTPstatus.CONFLICT).json({
      errors
    })
  };
};

/**
 * @description Function to hash compare
 */
export const hashCompare = (req, res) => {
  const data = req.body;
  const { error } = Joi.validate(data, hashCompareSchema, optionsSchemaValidate);

  if(!error) {
    return res.status(HTTPstatus.OK).json({
      match: serviceSecurity.hashCompare(data),
    })
  } else {
    const errors = error.details.map((item) => ({
      message: item.message,
    }));

    return res.status(HTTPstatus.CONFLICT).json({
      errors
    })
  };
};

/**
 * @description Function to return random salt and iv in hex
 */
export const getKeys = (req, res) => {
  return res.status(HTTPstatus.OK).json(serviceSecurity.getKeys());
}
