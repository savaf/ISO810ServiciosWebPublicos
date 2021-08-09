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
  async getRatesByCode(ctx) {
    const { code } = ctx.params;

    const entity = await strapi.services['exchange-rates'].findOneByCode(code);

    const entitySanitized = sanitizeEntity(entity, { model: strapi.models['exchange-rates'] })

    entitySanitized.rates = await strapi.services['exchange-rates'].getRates(entity)

    return entitySanitized;
  },
};
