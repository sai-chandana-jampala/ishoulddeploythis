import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    query.populate = { image: true };  

    const products = await strapi.entityService.findMany('api::product.product', query);
    return products;
  }
}));
