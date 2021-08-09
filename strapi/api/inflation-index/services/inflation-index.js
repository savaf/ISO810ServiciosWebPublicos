'use strict';
const setYear = require('date-fns/setYear')
const setMonth = require('date-fns/setMonth')
const endOfMonth = require('date-fns/endOfMonth')
const startOfMonth = require('date-fns/startOfMonth')
const formatISO = require('date-fns/formatISO')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {

  findOneByPeriod(period) {
    let date = new Date()
    const year = String(period).slice(0, 4)
    const month = Number(String(period).slice(4)) - 1

    date = setYear(date, year)
    date = setMonth(date, month)

    const startDate = startOfMonth(date)
    const endDate = endOfMonth(date)

    return strapi.query('inflation-index').findOne({
      date_gte: formatISO(startDate),
      date_lte: formatISO(endDate),
      _sort: 'date:desc'
    })
  }
};
