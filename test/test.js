var ghStreak = require('..');
var assert = require('assert');


describe('GitHub streak', function () {
    it('always errors', function (done) {
        ghStreak('sdfsdfsdfsdf', function (err, count) {
            assert.equal(typeof count, 'undefined', 'count is undefined');
            assert.equal(err.message, 'GitHub streaks are no more. More info: https://github.com/blog/2173-more-contributions-on-your-profile', 'error message');
            done();
        });
    });
});