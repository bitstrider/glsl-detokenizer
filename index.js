const through = require('through');

function write (token) {
    if(token.type!='eof') { //ignore eof token
        this.push(token.data)
    }
}

const createStream = () => (through(write))

module.exports = createStream;
