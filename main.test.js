/* eslint-env mocha */

const assert = require('assert')
const shapeDate = require('./main')

describe('shapeDate', () => {
  describe('works', () => {
    it('when given D', async () => {
      // const result = shapeDate(1)
    })

    it('when given DD', async () => {
      // const result = shapeDate('01')
    })

    it('when given D-M', async () => {
      // const result = shapeDate('1-1')
    })

    it('when given D-MM-YYYY', async () => {
      // const result = shapeDate('1-01-2019')
    })

    it.only('when given falsey values', async () => {
      let result = shapeDate()
      assert.strictEqual(result, Date.now())

      result = shapeDate('')
      assert.strictEqual(result, Date.now())

      result = shapeDate(0, '')
      assert.strictEqual(result, Date.now())
    })
  })
})
