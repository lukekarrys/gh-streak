#! /usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');

var getStreak = function (username, cb) {
    return cb(new Error('GitHub streaks are no more. More info: https://github.com/blog/2173-more-contributions-on-your-profile'));
};


if (!module.parent) {
    var username = process.argv[2];
    getStreak(username, function (err) {
        return console.error(err);
    });
} else {
    module.exports = getStreak;
}
