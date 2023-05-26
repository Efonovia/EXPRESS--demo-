const express = require("express")
const path = require('path')

const friendRouter = require('./routes/friends.router')
const messageRouter = require('./routes/messages.router')


const app = express()

const PORT = 3000

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())


app.use('/friends', friendRouter)
app.use('/messages', messageRouter)


app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})