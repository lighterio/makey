/* global describe bench it cube */
require('jscad')
var Cube = require('../lib/cube')

describe('Cubes', function () {
  bench('Constructing', function () {
    it('jscad', function () {
      var c
      c = cube()
      return c
    })
    it('makey', function () {
      var c
      c = new Cube()
      return c
    })
  })
  bench('Modeling', function () {
    var jC = cube()
    var mC = new Cube()
    it('jscad', function () {
      return jC.toStlString()
    })
    it('makey', function () {
      return mC.toStl()
    })
  })
})
