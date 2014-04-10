gh-streak
=========

Get your current GitHub streak.

## Install

**cli:**
`npm install -g gh-streak`

**module:**
`npm install gh-streak --save`

## Usage

**cli:**
`gh-streak <username>`

**module:**
```js
var ghStreak = require('gh-streak');

ghStreak(username, function (err, count) {
    if (err) {
        // No user or streak could be found
    } else {
        console.log('The streak is', count);
    }
});
```