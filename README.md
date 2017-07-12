# glsl-detokenizer

A through stream that reads from a GLSL token object stream and writes back a stream of GLSL token strings

Works with token object stream created by [stackgl/glsl-tokenizer](https://github.com/stackgl/glsl-tokenizer)

``` javascript
var tokenizer = require('glsl-tokenizer/stream')
var detokenizer = require('glsl-detokenizer')
var fs = require('fs')

// Streaming API:
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

```

# License

MIT, see [LICENSE.md](LICENSE.md) for further information.
