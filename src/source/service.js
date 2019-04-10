import bcrypt from 'bcrypt';
import crypto from 'crypto';
import config from '../lib/config';

export default () => {
  const service = {
    encrypt({ salt, iv, text }) {
      const saltBuffer = new Buffer(salt, 'hex');
      const ivBuffer = new Buffer(iv, 'hex');
    
      const cipher = crypto.createCipheriv(config.algoritm, saltBuffer, ivBuffer);
      let encrypted = cipher.update(text);
    
      encrypted = Buffer.concat([encrypted, cipher.final()]);
    
      return encrypted.toString('hex');
    },

    decrypt({ salt, iv, text }) {
      const saltBuffer = new Buffer(salt, 'hex');
      const ivBuffer = new Buffer(iv, 'hex');
      const textBuffer = new Buffer(text, 'hex');
    
      let decipher = crypto.createDecipheriv(config.algoritm, saltBuffer, ivBuffer);
      let decrypted = decipher.update(textBuffer);
    
      decrypted = Buffer.concat([decrypted, decipher.final()]);
    
      return decrypted.toString();
    },

    hash({ text }) {    
      return bcrypt.hashSync(text, Number(config.rounds));
    },

    hashCompare({ text, hash }) {    
      return bcrypt.compareSync(text, hash);
    },

    getKeys() {
      const key = crypto.randomBytes(32);
      const iv = crypto.randomBytes(16);
    
      return {
        salt: key.toString('hex'),
        iv: iv.toString('hex'),
      };
    }
  }

  return service;
}
