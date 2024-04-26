import * as dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'prod'){
    const configFile = `./.env.${process.env.NODE_ENV}`
    dotenv.config({ path: configFile })
}else{
    dotenv.config()
}

const PORT = process.env.PORT
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export {
    PORT,
    OPENAI_API_KEY
}