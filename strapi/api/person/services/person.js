'use strict';
const { Validator } = require("utils-do");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

  findOneByDocument(document, populate) {
    return strapi.query('person').findOne({
      document
    }, populate);
  },

  async getRates(personEntity) {
    // const allRates = await strapi.query('exchange-rates').find({}, ['code', 'value']);

    // const result = {}
    // allRates.forEach(({code, value}) => {
    //   result[code] = exchangeEntity.value / value
    // })

    return result
  },

  async validateId(person) {
    const validator = person.is_company ? Validator.isRNC : Validator.isAnIde
    // const formatter = person.is_company ? Validator.formatToRNC : Validator.formatToIde

    try {
      return validator(person.document)
    } catch {
      return false
    }
  }

};
