import express from "express"
import recordRoutes from "./routes/record.routes.js"
import { PORT } from "./config/index.js"

const app = express()

app.use(express.json())

app.use("/api/1.0/record", recordRoutes)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})