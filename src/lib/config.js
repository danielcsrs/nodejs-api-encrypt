import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  inputEncoding: process.env.INPUT_ENCODING,
  outputEncoding: process.env.OUTPUT_ENCODING,
  algoritm: process.env.ALGORITM,
  rounds: process.env.SALT_ROUND,
}