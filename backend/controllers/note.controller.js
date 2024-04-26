import fs from 'fs'
import path from 'path'
import { OPENAI_API_KEY } from '../config/index.js'
import OpenAI from 'openai'

const __dirname = path.resolve()
const openai = new OpenAI(OPENAI_API_KEY)


export const record = async (req, res) => {
    //handle record func
}

export const upload = async (req, res) => {
    // handle upload func
}

// transcribe the audio recording into a verbatim transcript.
export const transcribe = async (req, res) => {
    //TODO 從req.body取得使用者選的語言 增加whisper精確度
    //TODO 將測試音檔改回upload接收音檔

    //if(!req.file) return res.status(400).json({ error: "No file uploaded" })

    const audioFilePath = path.join(__dirname, 'src', 'record', 'test.wav')
    
    // transcribe audio file
    try {
        // call OpenAI whisper API
        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(audioFilePath),
            model: "whisper-1",
            language: "zh"
        })

        res.status(200).send(transcription)
    } catch (error) {
        console.log("Error in transcribe controller: ", error)
        return res.status(500).json({ error: "Internal server error" })
    }
        
}

export const summarize = async (req, res) => {
    // handle summarize func
}

export const sendEmail = async (req, res) => {
    // handle sendEmail func
}