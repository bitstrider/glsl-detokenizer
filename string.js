'use-strict'

function buildString (tokens) {
    return tokens.reduce( (glsl,token) => {
        if(token.type!='eof') { //ignore eof token
            glsl += token.data
        }
        return glsl
    }, '')
}

module.exports = buildString;
