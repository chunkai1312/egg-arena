'use strict';

const Arena = require('bull-arena');
const pathMatching = require('egg-path-matching');

module.exports = options => {
  const { router, queues } = options;
  const arena = Arena({ queues }, { basePath: router, disableListen: true });

  return async (ctx, next) => {
    const path = ctx.request.originalUrl || /* istanbul ignore next */ ctx.request.url;
    const match = pathMatching({ match: router });
    const isMatch = match({ path });

    if (isMatch) {
      /* istanbul ignore else */
      if (options.onPreArena) {
        await options.onPreArena(ctx);
      }
      ctx.status = 200;
      ctx.respond = false;
      arena(ctx.req, ctx.res);
    }

    await next();
  };
};
