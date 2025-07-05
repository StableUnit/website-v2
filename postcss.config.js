export default {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace'
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true
      },
      browsers: [
        'last 2 versions',
        '> 1%',
        'IE 11',
        'not dead'
      ]
    }
  }
}