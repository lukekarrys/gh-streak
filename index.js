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
        var $year = $('.contrib-number').first();
        var $streak = $('.contrib-number').last();

        if ($streak.length === 0) {
            cb(new Error('No contribution could be found. ' + username + ' might not be a user.'));
        }
        else {
            cb(null, parseInt($streak.text().replace(/\D/g, ''), 10), parseInt($year.text().replace(/\D/g, ''), 10));
        }
    });
};


if (!module.parent) {
    var username = process.argv[2];
    getStreak(username, function (err, count, year) {
        if (err) return console.error(err);

        count = (count + '').blue;
        username = username.red;

        console.log(username.red + ':', 'streak is at', (count + '').blue, '—', 'year is at ' + (year + '').blue);
    });
} else {
    module.exports = getStreak;
}
