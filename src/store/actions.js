import client from 'api-client'

export default {
  fetchItems ({commit}) {
    return client
      .fetchItems()
      .then(items => commit('setItems', items))
  },
  hideNavigation({commit}) {
    commit('setDrawer');
  },
  updateFilter( {commit}, input) {
    commit('setFilter', input);
  },
  updateSortedColumns ({commit}, options) {
    commit('setSortedColumns', options.sortBy);
  },
  updateSelectedItem({commit}, item) {
    commit('setSelectedItem', item);
  } 
}

