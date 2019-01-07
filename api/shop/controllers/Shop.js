'use strict';

/**
 * Shop.js controller
 *
 * @description: A set of functions called "actions" for managing `Shop`.
 */

module.exports = {

  /**
   * Retrieve shop records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.shop.search(ctx.query);
    } else {
      return strapi.services.shop.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a shop record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.shop.fetch(ctx.params);
  },

  /**
   * Count shop records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shop.count(ctx.query);
  },

  /**
   * Create a/an shop record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shop.add(ctx.request.body);
  },

  /**
   * Update a/an shop record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shop.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shop record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shop.remove(ctx.params);
  }
};
