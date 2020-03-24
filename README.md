![GitHub file size in bytes](https://img.shields.io/github/size/bernardini687/shape-date/main.js)
![GitHub](https://img.shields.io/github/license/bernardini687/shape-date)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/shape-date)
![npm](https://img.shields.io/npm/dt/shape-date)

# shape-date
_shape a date from minimal input_

this module is designed to give you back a Date even from a single day value, defaulting the rest to the current date.

# example
```js
const shapeDate = require('shape-date')

/*
  shapeDate([value, [separator='-']]) => Date

    [value] (Number)         :: just the day value
    [value] (String)         :: DD[-MM[-YYYY]]
    [separator='-'] (String) :: one of . / _ ,
*/

// imagine today is the 5th of November 2020:

shapeDate()             // 2020-11-05
shapeDate(3)            // 2020-11-03
shapeDate('4-7')        // 2020-07-04
shapeDate('7.01', '.')  // 2020-01-07
shapeDate('12-11-1990') // 1990-11-12
```
