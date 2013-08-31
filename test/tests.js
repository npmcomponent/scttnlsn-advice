var assert = require('assert');
var advice = require('advice');

describe('Advice', function () {
    beforeEach(function () {
        this.obj = {
            test: function () {
                this.value = 'foo';
            }
        };
    });

    describe('.before', function () {
        it('calls advice before existing method', function () {
            var called = false;

            advice(this.obj).before('test', function () {
                called = true;
                this.value = 'bar';
            });

            this.obj.test();

            assert(this.obj.value === 'foo');
            assert(called);
        });
    });

    describe('.after', function () {
        it('calls advice after existing method', function () {
            var called = false;

            advice(this.obj).after('test', function () {
                called = true;
                this.value = 'bar';
            });

            this.obj.test();

            assert(this.obj.value === 'bar');
            assert(called);
        });
    });

    describe('.around', function () {
        it('provides original function for calling', function (done) {
            advice(this.obj).around('test', function (orig) {
                assert(this.value === undefined);
                orig();
                assert(this.value === 'foo');
                done();
            });

            this.obj.test();
        });
    });
});