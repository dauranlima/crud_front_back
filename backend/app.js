const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

const routes = require("./routes/router")

app.use("/api", routes)

app.listen(3000, ()=> console.log('Server is ONLINE running at backdoor 3000'))