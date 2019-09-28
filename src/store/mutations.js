export default {
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