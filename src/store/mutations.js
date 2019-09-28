export default {
  setDrawer(state) {
    state.drawer = ! state.drawer;
  },
  setFilter (state, input) {
    state.search = input;
  },  
  setItems (state, items) {
    state.items = items
  },
  setSortedColumns (state, columns) {
    state.sortedColumns = columns;
  }
}