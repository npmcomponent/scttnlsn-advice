advice
======

Augment an object by adding functionality before, after or around a method.  Based on Angus Croll's [gist](https://gist.github.com/angus-c/2864853).

## Install

    component install scttnlsn/advice

## Usage

```js
var obj = {
    hello: function () {
        return 'Hello';
    }
};

advice(obj).around('hello', function (orig) {
    return orig() + ' World';
});

obj.hello(); // => 'Hello World'
```

## API

### .before(method, fn)

Replaces the given method with a new function that calls `fn` before the original.

```js
advice(obj).before('hello', function () {
    ...
});
```

### .after(method, fn)

Replaces the given method with a new function that calls `fn` after the original.

```js
advice(obj).after('hello', function () {
    ...
});
```

### .around(method, fn)

Replaces the given method with a new function that calls `fn`.  `fn` can optionally call the original.

```js
advice(obj).around('hello', function (orig) {
    ...
});
```

# License

MIT