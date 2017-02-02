/**
 * Error object for SUGOS
 * @module sg-errors
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get SgError () { return d(require('./sg_error')) }
}
