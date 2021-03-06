export default {
  /**
   * list all stores
   * @param {Object} queryParams search query params
   */
  listStores(queryParams) {
    return this.$fetch('GET', `/admin/stores`, {
      queryParams,
      auth: 'basic',
    });
  },

  /**
   * get the current store data
   */
  createStore(store) {
    return this.$fetch('POST', '/stores', {
      body: JSON.stringify(store),
      auth: 'basic',
    });
  },

  /**
   * update store data
   */
  updateStore(store, data) {
    return this.$fetch('PUT', `/stores/${encodeStoreName(store)}`, {
      body: JSON.stringify(data),
      auth: 'basic',
    });
  },

  /**
   * get store by its url
   * @param {string} store store url
   */
  getStoreByURL(store) {
    return this.$fetch('GET', `/stores/${encodeStoreName(store)}`, { auth: 'basic' });
  },

  /**
   * get the current store data
   */
  getStoresByUser(user, limit = 100) {
    const filter = JSON.stringify({
      where: {
        'users.email': user.toLowerCase(),
      },
      limit,
    });
    return this.$fetch('GET', '/stores', { auth: 'basic', queryParams: { filter } });
  },

  /**
   * get the current store data
   */
  getCurrentStore() {
    return this.$fetch('GET', '/stores/me', { auth: 'token' });
  },

  /**
   * re Sync store
   */
  syncStore(store) {
    return this.$fetch('PUT', `/stores/${encodeStoreName(store)}/sync`, {
      auth: 'basic',
    });
  },

  /**
   * get shipping couriers
   */
  getStoreLogs(params) {
    const queryParams = { ...params };
    if (queryParams.storeId) {
      queryParams.storeId = encodeStoreName(queryParams.storeId);
    }
    return this.$fetch('GET', '/logs', { auth: 'basic', queryParams });
  },
};

/**
 * Return an encode version from the store name
 */
function encodeStoreName(store) {
  return encodeURIComponent(store.toLowerCase());
}
