'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  findOneByCode(code, populate) {
    return strapi.query('exchange-rates').findOne({
      code_contains: code
    }, populate);
  },

  async getRates(exchangeEntity) {
    const allRates = await strapi.query('exchange-rates').find({}, ['code', 'value']);

    const result = {}
    allRates.forEach(({code, value}) => {
      result[code] = exchangeEntity.value / value
    })

    return result
  },


};
