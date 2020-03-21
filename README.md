# shape-date

_shape a date from minimal input_

this module is designed to give you back a Date even from a single day value, defaulting the rest to the current date.

# example

```js
const shapeDate = require('shape-date')

/*
  feed the function with either:
    * Number :: just the day value
    * String :: DD[-MM[-YYYY]]

  and an optional separator:
    * String :: one of . / _ ,
*/

// imagine today is the 5th of November 2019:

shapeDate()             // 2019-11-05T10:12:53.000Z
shapeDate(3)            // 2019-11-03T10:12:53.000Z
shapeDate('4-7')        // 2019-07-04T09:12:53.000Z
shapeDate('12-11-1990') // 1990-11-12T10:12:53.000Z
shapeDate('7.01', '.')  // 2018-01-07T09:12:53.000Z
```
