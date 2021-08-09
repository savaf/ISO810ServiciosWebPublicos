'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {

  // Called before an entry is created
  async beforeCreate (data) {
    let isDocument = await strapi.services.person.validateId(data);
    if (!isDocument) {
      throw new Error('Document is not valid')
    }
  },
  // async beforeUpdate(params, data) {
  //   console.log({ params, data })
  //   debugger
  //   // let isDocument = await strapi.services.person.validateId(data);
  //   // if (!isDocument) {
  //   //   throw new Error('Document is not valid')
  //   // }
  // },
};
