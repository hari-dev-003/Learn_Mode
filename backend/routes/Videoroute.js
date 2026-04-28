import { Router } from 'express';
import { getTranscript, askQuestion } from '../controllers/VideoControl.js';

const router = Router();

router.get('/transcript/:videoId', getTranscript);
router.post('/ask', askQuestion);

export default router;
