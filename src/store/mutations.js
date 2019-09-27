export default {
  updateFilter (state, input) {
    state.search = input;
  },
  updateTableOptions (state, options) {
   state.tableOptions = options;
  },
  setItems (state, items) {
   state.items = items
  }
}