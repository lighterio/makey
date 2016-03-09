var pub = ['cube', 'cylinder', 'part', 'polygon', 'prism', 'shape']

pub.forEach(function (name) {
  var Thing = require('./lib/' + name)
  exports[name] = function (options) {
    return new Thing(options)
  }
})
