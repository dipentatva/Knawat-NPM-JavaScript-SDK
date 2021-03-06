export default {
  /**
   * Get all catalog categories
   *
   * @returns
   * @see https://knawat-mp.restlet.io/#operation_get_list_of_categories
   * @memberof MP
   */
  getAllCategories() {
    return this.$fetch('GET', '/catalog/categories', { auth: 'token' });
  },

  /**
   * get invoices list
   * @param {object} queryParams
   */
  getCategories(queryParams) {
    return this.$fetch('GET', '/catalog/categories', {
      auth: 'token',
      queryParams,
    });
  },
};
