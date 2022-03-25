const app = require("./app")
const db = require("./db/index")
const PORT = process.env.PORT || 8000


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => {
    console.log(`USER-SERVICE RUNNING ON PORT ${PORT}`)
})
