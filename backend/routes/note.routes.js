import express from 'express'
import { record, sendEmail, summarize, transcribe, upload } from '../controllers/note.controller.js'

const router = express.Router()

// /api/1.0/note

router.get('/', (req, res) => {
    res.send('this is record routes')
})

router.post('/record', record)

router.post('/upload', upload)

// TODO: add upload middleware
router.post('/transcribe', transcribe)

router.post('/summarize', summarize)

router.post('/email', sendEmail)

export default router