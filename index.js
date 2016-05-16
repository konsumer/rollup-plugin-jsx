var jsx = require('jsx-transform')
var MagicString = require( 'magic-string' )

module.exports = function(options){
  return {
    transform: function sourceToCode(code, id){
      var s = new MagicString( code )
      var out = jsx.fromString(code, options)
      s.overwrite( 0, code.length, out.toString() )

      return {
        code: s.toString(),
        map: s.generateMap({ hires: true })
      }
    }
  }
}
