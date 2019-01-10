'use strict';

exports.keys = '123456';
exports.middleware = [ 'arena' ];
exports.arena = {
  router: '/arena',
  queues: [{
    name: 'my-queue',
    hostId: 'Queue Server 1',
    host: '127.0.0.1',
    port: 6379,
  }],
};
