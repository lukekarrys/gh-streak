gh-streak
=========

## This module no longer works since it pulled streaks from the contribution graph [which has been removed](https://github.com/blog/2173-more-contributions-on-your-profile).

[![NPM](https://nodei.co/npm/gh-streak.png)](https://nodei.co/npm/gh-streak/)
[![Build Status](https://travis-ci.org/lukekarrys/gh-streak.png?branch=master)](https://travis-ci.org/lukekarrys/gh-streak)

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

ghStreak(username, function (err, count, year) {
    if (err) {
        // No user or streak could be found
    } else {
        console.log('The streak is', count);
        console.log('Contributions for year', year);
    }
});
```