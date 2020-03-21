/* eslint-env mocha */

const { strictEqual: assertEqual } = require('assert')
const shapeDate = require('./shapeDate')

describe('shapeDate on the 5th of November 2020', () => {
  const TIME = 'T12:00:00.000Z'

  describe('works', () => {
    it('when given D', async () => {
      const actual = shapeDate(1)
      assertEqual(actual.toISOString(), `2020-11-01${TIME}`)
    })

    it('when given DD', async () => {
      const actual = shapeDate('01')
      assertEqual(actual.toISOString(), `2020-11-01${TIME}`)
    })

    it('when given D-M', async () => {
      const actual = shapeDate('1-1')
      assertEqual(actual.toISOString(), `2020-01-01${TIME}`)
    })

    it('when given D-MM-YYYY', async () => {
      const actual = shapeDate('1-01-2019')
      assertEqual(actual.toISOString(), `2019-01-01${TIME}`)
    })

    it('when given falsey values', async () => {
      let actual = shapeDate()
      assertEqual(actual.toISOString(), `2020-11-05${TIME}`)

      actual = shapeDate('')
      assertEqual(actual.toISOString(), `2020-11-05${TIME}`)

      actual = shapeDate(0, '')
      assertEqual(actual.toISOString(), `2020-11-05${TIME}`)
    })
  })

  describe.skip('fails', () => {
    it('when given an impossible day', async () => {
      // const actual = shapeDate(32)
    })

    it('when given a poorly formatted date', async () => {
      // const actual = shapeDate('2019-')
    })
  })
})
