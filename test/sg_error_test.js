/**
 * Test case for sgError.
 * Runs with mocha.
 */
'use strict'

const SgError = require('../lib/sg_error.js')
const assert = require('assert')
const co = require('co')

describe('sg-error', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg error', () => co(function * () {
    let error = new SgError('Something is wrong!')
    assert.ok(error)
  }))
})

/* global describe, before, after, it */
