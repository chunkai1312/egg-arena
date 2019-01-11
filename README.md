# egg-arena

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/egg-arena.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-arena
[travis-image]: https://img.shields.io/travis/chunkai1312/egg-arena.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunkai1312/egg-arena
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/egg-arena.svg?style=flat-square
[codecov-url]: https://codecov.io/github/chunkai1312/egg-arena?branch=master

Egg Arena plugin.

[Arena](https://github.com/bee-queue/arena) is an interactive UI dashboard for [Bee Queue](https://github.com/bee-queue/bee-queue) and [Bull](https://github.com/optimalbits/bull).

## Install

```bash
$ npm i egg-arena --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.arena = {
  enable: true,
  package: 'egg-arena',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.arena = {
  // Required. To specify custom path to mount server on.
  router: '/arena',

  // Required. To configure queues.
  queues: [
    {
      name: 'my_queue', // Required. Name of the bull queue.
      hostId: 'Queue Server 1', // Required. Hostname or queue prefix.
      redis: {
        port: /* redis port */,
        host: /* redis host */,
        password: /* redis password */,
      },
    },
  ],

  // Optional. Execute middleware before routing.
  onPreArena: function* (ctx) {},
};

exports.middleware = [ 'arena' ];
```

Please see arena's [queue configuration](https://github.com/bee-queue/arena#prerequisites) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/chunkai1312/egg-arena/issues).

## License

[MIT](LICENSE)
