var bind = require('bind');
var each = require('each');

module.exports = function (obj) {
    var advice = {
        around: function (base, wrapped) {
            return function () {
                var args = [].slice.call(arguments);
                return wrapped.apply(this, [bind(this, base)].concat(args));
            };
        },

        before: function (base, before) {
            return this.around(base, function () {
                var args = [].slice.call(arguments);
                var orig = args.shift();

                before.apply(this, args);
                return orig.apply(this, args);
            });
        },

        after: function (base, after) {
            return this.around(base, function () {
                var args = [].slice.call(arguments);
                var orig = args.shift();

                var res = orig.apply(this, args);
                after.apply(this, args);
                return res;
            });
        }
    };

    var ret = {};

    each(['before', 'after', 'around'], function (type) {
        ret[type] = function (method, fn) {
            if (typeof obj[method] === 'function') {
                return obj[method] = advice[type](obj[method], fn);
            } else {
                return obj[method] = fn;
            }
        };
    });

    return ret;
};