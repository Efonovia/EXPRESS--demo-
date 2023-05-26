const path = require('path')

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, "..", 'public', 'images', 'opp1.png'))
    // res.send('<h1>Hello Albert</h1>')
}

function postMessage(req, res) {
    console.log('updating messages...')
}

module.exports = {
    getMessages,
    postMessage
}