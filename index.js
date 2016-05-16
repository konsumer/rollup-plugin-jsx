import jsx from 'jsx-transform'

export default function jsx(options){
  return {
    transform: function sourceToCode(source){
      return jsx.fromString(source, options)
    }
  }
}
