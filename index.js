#! /usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');
var githubUrl = 'https://github.com/';

var getStreak = function (username, cb) {
    request(githubUrl + username, function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return cb(error || new Error(response.statusCode));
        }

        var $ = cheerio.load(body);
        var $streak = $('.contrib-number').last();
        var days = parseInt($streak.text(), 10);

        if ($streak.length === 0) {
            cb(new Error('No contribution could be found. ' + username + ' might not be a user.'));
        }
        else if (isNaN(days)) {
            cb(new Error('Contribution streak for ' + username + ' is not a number.'));
        }
        else {
            cb(null, days);
        }
    });
};


if (!module.parent) {
    var username = process.argv[2];
    getStreak(username, function (err, count) {
        if (err) return console.error(err);

        count = (count + '').blue;
        username = username.red;

        console.log(username + ':', 'streak is at', count + '.');
    });
} else {
    module.exports = getStreak;
}
