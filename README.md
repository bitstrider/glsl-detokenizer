# glsl-detokenizer

A through stream that reads from a GLSL token object stream and writes back a stream of GLSL token strings

Works with token object stream created by [stackgl/glsl-tokenizer](https://github.com/stackgl/glsl-tokenizer)

``` javascript
// Streaming API:
var tokenizer = require('glsl-tokenizer/stream')
var detokenizer = require('glsl-detokenizer/stream')
var fs = require('fs')

const glslIn = fs.createReadStream('some.glsl')
const glslOut = fs.createReadStream('some-modded.glsl')

glslIn
  .pipe(tokenizer())
  .on('data', function(token) {
      if(token.type == 'float') {
          token.data = '1.0'; // change all float literals to 1.0
      }
  })
  .pipe(detokenizer())
  .pipe(glslOut)


// Synchronously:
var tokenizer = require('glsl-tokenizer/string')
var detokenizer = require('glsl-detokenizer/string')
var fs = require('fs')

const tokens = tokenizerString(fs.readFileSync('some.glsl'))
tokens.forEach( token => {
    if(token.type == 'float') {
        token.data = '1.0'; // change all float literals to 1.0
    }    
})
fs.writeFileSync('some-modded.glsl',detokenizerString(tokens))

```

# License

MIT, see [LICENSE.md](LICENSE.md) for further information.
