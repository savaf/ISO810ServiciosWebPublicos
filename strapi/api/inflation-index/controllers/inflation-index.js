'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  /**
  * Retrieve a record.
  *
  * @return {Object}
  */
  async findOneByPeriod(ctx) {
    const { period } = ctx.params;

    const entity = await strapi.services['inflation-index'].findOneByPeriod(period);

    return sanitizeEntity(entity, { model: strapi.models['inflation-index'] })
  },
};
