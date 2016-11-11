module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-time-passed',
      externals: {
        react: 'React'
      }
    }
  }
}
