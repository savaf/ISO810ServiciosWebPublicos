'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // findOneByDocument
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  async healthByDocument(ctx) {
    const { document } = ctx.params;

    const entity = await strapi.services['person'].findOneByDocument(document);

    const entitySanitized = sanitizeEntity(entity, { model: strapi.models['person'] })

    entitySanitized.total_owed_amount = entitySanitized.debtor_histories.reduce((p, c) => {
      let result = p

      if (c.status === 'owed') {
        result += c.total_money_owed
      }

      return result
    }, 0)

    entitySanitized.total_lent_amount = entitySanitized.creditor_histories.reduce((p, c) => {
      let result = p

      if (c.status === 'owed') {
        result += c.total_money_owed
      }

      return result
    }, 0)

    return entitySanitized;
  },
};
