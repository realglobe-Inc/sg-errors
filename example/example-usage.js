'use strict'

const { SgError } = require('sg-errors')
const co = require('co')

co(function * () {
  /* ... */
  throw new SgError('Something is wrong!')
})

