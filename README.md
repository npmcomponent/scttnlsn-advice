*This repository is a mirror of the [component](http://component.io) module [scttnlsn/advice](http://github.com/scttnlsn/advice). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/scttnlsn-advice`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
advice
======

Augment an object by adding functionality before, after or around a method.  Based on Angus Croll's [gist](https://gist.github.com/angus-c/2864853).

## Install

    component install scttnlsn/advice

## Usage

```js
var obj = {
    hello: function (name) {
        return 'Hello ' + name;
    }
};

advice(obj).around('hello', function (orig, name) {
    return orig(name) + '!';
});

obj.hello('World'); // => 'Hello World!'
```

## API

### .before(method, fn)

Replaces the given method with a new function that calls `fn` before the original.

```js
advice(obj).before('hello', function (name) {
    ...
});
```

### .after(method, fn)

Replaces the given method with a new function that calls `fn` after the original.

```js
advice(obj).after('hello', function (name) {
    ...
});
```

### .around(method, fn)

Replaces the given method with a new function that calls `fn`.  `fn` can optionally call the original.

```js
advice(obj).around('hello', function (orig, name) {
    ...
});
```

# License

MIT