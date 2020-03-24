/* eslint-env mocha */

const { strictEqual: assertEqual } = require('assert')
const shapeDate = require('./main')

describe('shapeDate on the 5th of November 2020', () => {
  const RESET = Date.now.bind(global.Date)
  const TIME = 'T12:00:00.000Z'

  // stub with a fixed Date just for testing.
  beforeEach(() => {
    global.Date.now = () => Date.UTC(2020, 10, 5, 12)
  })
  afterEach(() => {
    global.Date.now = RESET
  })

  describe('Date.now stub', () => {
    it('works', async () => {
      assertEqual(1604577600000, Date.now())
    })

    it('works inside shapeDate', async () => {
      assertEqual('2020-11-05T12:00:00.000Z', shapeDate().toISOString())
    })
  })

  describe('works', () => {
    it('when given D', async () => {
      const subject = shapeDate(1)
      assertEqual(`2020-11-01${TIME}`, subject.toISOString())
    })

    it('when given DD', async () => {
      const subject = shapeDate('01')
      assertEqual(`2020-11-01${TIME}`, subject.toISOString())
    })

    it('when given D-M', async () => {
      const subject = shapeDate('1-1')
      assertEqual(`2020-01-01${TIME}`, subject.toISOString())
    })

    it('when given D-MM-YYYY', async () => {
      const subject = shapeDate('1-01-2019')
      assertEqual(`2019-01-01${TIME}`, subject.toISOString())
    })

    it('when given falsey values', async () => {
      let subject = shapeDate()
      assertEqual(`2020-11-05${TIME}`, subject.toISOString())

      subject = shapeDate('')
      assertEqual(`2020-11-05${TIME}`, subject.toISOString())

      subject = shapeDate(0, '')
      assertEqual(`2020-11-05${TIME}`, subject.toISOString())
    })

    it('when given a valid separator', async () => {
      const subject = shapeDate('31.10', '.')
      assertEqual(`2020-10-31${TIME}`, subject.toISOString())
    })
  })

  describe.skip('fails', () => {
    it('when given an impossible day', async () => {
      // const subject = shapeDate(32)
    })

    it('when given a poorly formatted date', async () => {
      // const subject = shapeDate('2019-')
    })

    it('when given an invalid separator', async () => {
      // const subject = shapeDate('31+10', '+')
    })

    it('when given a useless separator', async () => {
      // const subject = shapeDate('31+10', '.')
    })

    it('when given an invalid argument', async () => {
      // const subject = shapeDate('.')
    })
  })
})
