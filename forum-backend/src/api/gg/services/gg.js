'use strict';

/**
 * gg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gg.gg');
