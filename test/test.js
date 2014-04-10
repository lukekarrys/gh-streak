var ghStreak = require('..');
var assert = require('assert');


describe('GitHub streak', function () {
    it('It should get a number for a valid username', function (done) {
        ghStreak('lukekarrys', function (err, count) {
            assert.equal(typeof count, 'number');
            assert.equal(err, null);
            done();
        });
    });

    it('It should return a 404 error for a user that does not exist', function (done) {
        ghStreak('not-real-user-im-sure-of-it', function (err, count) {
            assert.equal(typeof count, 'undefined');
            assert.equal(err.message.indexOf('404') > -1, true);
            done();
        });
    });

    it('It should not get a number if the page does not have a contribution', function (done) {
        ghStreak('tweetyourbracket/scores', function (err, count) {
            assert.equal(typeof count, 'undefined');
            assert.equal(err.message.indexOf('might not be a user') > -1, true);
            done();
        });
    });
});