var fs = require('fs')
var Type = require('lighter-type')
var Shape = require('./shape')

module.exports = Type.extend({

  init: function (options) {
    this.shapes = this.shapes || []
    this.points = this.points || []
  },

  toStl: function () {
    var stl = 'solid part\n'
    var points = this.points
    for (var i = 0, l = points.length; i < l; i++) {
      var point = points[i]
      point.stl = 'vertex ' + point.join(' ') + '\n'
    }
    var shapes = this.shapes
    for (i = 0, l = shapes.length; i < l; i++) {
      stl += shapes[i].toStl()
    }
    stl += 'endsolid part\n'
    return stl
  },

  write: function (path, fn) {
    var content = this.toStl()
    fs.writeFile(path, content, fn)
  },

  translate: Shape.prototype.translate,
  scale: Shape.prototype.scale

})
