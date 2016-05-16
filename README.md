# rollup jsx plugin

This is a simple wrapper around [jsx-transform](https://github.com/alexmingoia/jsx-transform).

Install it with `npm install rollup-plugin-jsx`

Use it like this in your config:

```js
import jsx from 'rollup-plugin-jsx'
import buble from 'rollup-plugin-buble'

export default {
  dest: 'build/app.js',
  entry: 'src/index.js',
  plugins: [
    jsx(),
    buble()
  ],
  sourceMap: true
}

```

For a more complete example, see [buble-react-rollup-starter](https://github.com/yamafaktory/buble-react-rollup-starter)
