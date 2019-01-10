'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/arena.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/arena-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should get arena html response', async () => {
    const res = await app.httpRequest()
      .get('/arena/')
      .set('Accept', 'text/html')
      .expect(200);

    assert(res.type, 'text/html');
  });

  it('should not get arena html response if path does not match router', async () => {
    await app.httpRequest()
      .get('/404')
      .set('Accept', 'text/html')
      .expect(404);
  });
});
