import client from 'api-client'

export default {
  fetchItems ({commit}) {
    return client
      .fetchItems()
      .then(items => commit('setItems', items))
  },
  updateFilter( {commit}, input) {
    commit('setFilter', input);
  },
  updateSortedColumns ({commit}, options) {
    commit('setSortedColumns', options.sortBy);
  }
}

