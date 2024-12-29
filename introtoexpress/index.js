const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Method()
//GET --> (READ) (Record/Resource)
//POST --> (CREATE)
//PUT --> (UPDATE)
//DELETE --> (Delete)

//End Point
app.get("/test", (req, res) => {
    res.send("<h1>This is my test page!!!</h1>")
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))