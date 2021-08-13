var fs = require('fs');

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async ({ request, response }, next) => {
        const start = Date.now();
        await next();
        if (
          request.path.includes('/admin') ||
          request.path.includes('/documentation') ||
          request.path.includes('/requests') ||
          request.path.includes('.html') ||
          request.path.includes('.png') ||
          request.path.includes('swagger')
        ) {
          return;
        }

        const entry = await strapi.query('requests').create({
          route: request.path,
          ipClient: request.ip,
          responseTime: Math.ceil(Date.now() - start),
          headers: request.headers,
          body: request.body,
          query: request.query,
          response: response.body
        });
      });
    },
  };
};
