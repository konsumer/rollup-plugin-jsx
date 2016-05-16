var jsx = require('jsx-transform')
module.exports = function(options){
  return {
    transform: function sourceToCode(source){
      return jsx.fromString(source, options)
    }
  }
}
