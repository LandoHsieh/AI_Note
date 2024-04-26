import express from "express"
import noteRoutes from "./routes/note.routes.js"
import { PORT } from "./config/index.js"

const app = express()

app.use(express.json())

app.use("/api/1.0/note", noteRoutes)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})