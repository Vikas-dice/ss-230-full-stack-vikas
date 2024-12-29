import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


app.get("/test/:name", (req, res) => {
    console.log(req.params.name)
    const name = { "Dank": req.params.name }
    res.json(name)
})

//HTTP - [POST,GET,PUT,DELETE]
// get ,post ,put ,delete


const PORT = 3000
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))