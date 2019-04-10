# NodeJS API Encrypt

Web API with Express for generate hash, encryption, salts and iv. I used bcrypt to create hashes and Crypto, native in NodeJS, for cryptography any data.

This app use Babel to transpile ES6 and nodemon running in script.

## Installation


```shell
$ git clone https://github.com/danielcsrs/nodejs-api-encrypt
$ cd nodejs-api-encrypt; npm install
```

After run install, create .env file and customize SALT_ROUNDS and PORT, but your should use 12 or more rounds. 

```shell
$ npm run debug
```


Consider read notes about of the cost of processing with bcrypt, read into official docs. 

https://www.npmjs.com/package/bcrypt#a-note-on-rounds

### Testing

Import postman_collection.json in your Postman, the urls from app and payloads are formatted for your tests.


### Documentations

https://nodejs.org/api/crypto.html

https://www.npmjs.com/package/bcrypt




F

