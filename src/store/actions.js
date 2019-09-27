import client from 'api-client'

export default {
  updateFilter( {commit}, input) {
    commit('updateFilter', input);
  },
  updateTableOptions ( {commit}, options) {
    commit('updateTableOptions', options.sortBy);
  },
  fetchItems ({ commit }) {
    return client
      .fetchItems()
      .then(items => commit('setItems', items))
  },
  uploadItems({ commit }, items) {
    commit('setItems', items);
  }
}

