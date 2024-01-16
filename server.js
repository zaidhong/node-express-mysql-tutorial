const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const corsOptions = {
    /* origin: 'http://localhost:8080' */
}
app.use(cors(corsOptions))
app.use(express.json()) // => Content-Type : application/json
app.use(express.urlencoded({ extended: true })) // => Content-Type : application/x-form-urlencoded

const db = require("./models")
db.sequelize.sync()
.then(() => {
    console.log("Synced db.")
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message)
});

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})