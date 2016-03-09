var Type = require('lighter-type')

var Shape = module.exports = Type.extend({

  init: function Shape (options) {
    this.points = options.points || []
    if (options.part) {
      this.attach(options.part)
    }
  },

  attach: function (part) {
    if (this.part !== part) {
      this.part = part
      var all = part.points = part.points || []
      var n = all.length
      var points = this.points
      for (var i = 0, l = points.length; i < l; i++) {
        all[n++] = points[i]
      }
    }
  },

  pull: function (options) {
    var shape = this
    var part = this.part
    var shapes = part.shapes
    var s = shapes.length
    var start = shape.points
    if (s === 1) {
      // TODO: Figure out which way to flip a shape to get its normal
      // vector to point in the direction it should.
      shape = shapes[s++] = shape.clone()
    }
    shape.translate(options)
    var end = shape.points
    var p = start.length
    var i = p - 1
    for (var j = 0; j < p; j++) {
      shapes[s++] = new Shape({
        points: [start[i], start[j], end[j], end[i]],
        part: part
      })
      i = j
    }
    return this
  },

  flip: function () {
    this.points.reverse()
    return this
  },

  clone: function () {
    var points = this.points
    var l = points.length
    var cloned = new Array(l)
    for (var i = 0; i < l; i++) {
      var p = points[i]
      cloned[i] = [p[0], p[1], p[2]]
    }
    return new Shape({points: cloned, part: this.part})
  },

  translate: function (options) {
    var x = options.x
    var y = options.y
    var z = options.z
    var points = this.points
    var l = points.length
    for (var i = 0; i < l; i++) {
      var p = points[i]
      if (x) p[0] += x
      if (y) p[1] += y
      if (z) p[2] += z
    }
    return this
  },

  scale: function (options) {
    var x = options.x
    var y = options.y
    var z = options.z
    var points = this.points
    var l = points.length
    for (var i = 0; i < l; i++) {
      var p = points[i]
      if (x) p[0] *= x
      if (y) p[1] *= y
      if (z) p[2] *= z
    }
    return this
  },

  toStl: function toStl () {
    // TODO: Handle concave shapes.
    var points = this.points
    // Points should already have .stl properties from Part.toStl pre-work.
    var stl = ''
    var pivotStl = points[0].stl
    for (var i = 2, l = points.length; i < l; i++) {
      stl += 'facet normal ' + (this.normal || '0 0 0') + '\nouter loop\n' +
        pivotStl + points[i - 1].stl + points[i].stl +
        'endloop\nendfacet\n'
    }
    return stl
  }
})
