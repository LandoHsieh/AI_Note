# AI Note
### 透過AI將錄音檔自動整理成重點筆記，並發送至Email  
## 安裝套件
* 進入 /backend目錄 `cd backend/`
* 安裝套件 `npm i`

## 環境變數
* 進入 /backend目錄 `cd backend/`
* 創建.env.dev `touch .env.dev`  
.env.dev內需包含以下變數：  
`PORT=3000` #運行環境的PORT  
`OPENAI_API_KEY=你的API_KEY` #OpenAI的API金鑰

## 啟動專案
`npm run dev`
