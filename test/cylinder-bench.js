/* global describe bench it cylinder */
require('jscad')
var Cylinder = require('../lib/cylinder')

describe('Cylinders', function () {
  bench('Constructing', function () {
    it('jscad', function () {
      var c
      c = cylinder({fn: 60}).scale([1, 1, 0.1])
      return c
    })
    it('makey', function () {
      var c
      c = new Cylinder().scale({z: 0.1})
      return c
    })
  })
  bench('Modeling', function () {
    var jC = cylinder({fn: 60})
    var mC = new Cylinder()
    it('jscad', function () {
      return jC.toStlString()
    })
    it('makey', function () {
      return mC.toStl()
    })
  })
})
