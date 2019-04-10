import express from 'express';
import {
  encrypt,
  decrypt,
  hash,
  hashCompare,
  getKeys,
} from '../source';

const router = express.Router();

router.post('/encrypt', encrypt);
router.post('/decrypt', decrypt);
router.post('/hash', hash);
router.post('/hash/compare', hashCompare);

router.get('/keys', getKeys);

export default router;
