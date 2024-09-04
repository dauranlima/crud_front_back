const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())


app.listen(3000, ()=> console.log('Server is ONLINE running at backdoor 3000'))