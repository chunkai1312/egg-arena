'use strict';

/**
 * egg-arena default config
 * @member Config#arena
 * @property {String} router - specify custom path to mount server on
 * @property {Array} queues - configure queues
 * @property {Function} onPreArena - execute middleware before routing
 */
exports.arena = {
  router: '/arena',
  queues: [],
  onPreArena: async () => {},
};
