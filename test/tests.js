const tap = require('tap')

const detokenizer = require('../index')
const tokenizer = require('glsl-tokenizer/stream')

const streamEqual = require('stream-equal')
const fs = require('fs')

tap.test("detokenizer reproduces same input to tokenizer", function (t) {
    const a = 'test/fixtures/test-in.glsl'
    const b = 'test/fixtures/test-out.glsl'
    const readIn = fs.createReadStream(a)
    const writeOut = fs.createWriteStream(b)

    readIn
        .pipe(tokenizer())
        .pipe(detokenizer())
        .pipe(writeOut)
        .on('close',()=>{
            const readIn = fs.createReadStream(a);
            const readOut = fs.createReadStream(b);
            streamEqual(readIn, readOut, function(err, equal) {
                t.error(err, `comparing ${a} and ${b} yielded this error ${err}`);
                t.ok(equal, `${a} did not match ${b}`)
                t.end();

            })
        })
})
