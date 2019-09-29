<template>
  <v-card>
    <v-card-title>
      Pets
      <div class="flex-grow-1"></div>
      <v-text-field
        :value="search"
        @input="updateFilter"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :sort-by="sortedBy"
      @click:row="select"
      @update:options="updateSortedColumns"
      multi-sort
      no-data-text="Loading, please wait ..."
      class="custom-data-table"
    >    
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import routes from '../data/constants/routes';

export default {
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters([
      'headers',
      'items',
      'search',
      'sortedBy'
    ])
  },
  created () {
    this.fetchItems();
  },
  methods: {
    fetchItems() { // fetch data  from API
      this.$store.dispatch('fetchItems').then(response => {
        response ? this.loading = false : this.loading = true;
      });
    },
    select(row) { // select row and redirect to certain page with row details
      this.$store.dispatch('updateSelectedItem', row);
      this.$router.push(`${routes.PET_URL}/${row.id}`);
    },
    updateSortedColumns(columns) { // update sorted
      this.$store.dispatch('updateSortedColumns', columns);
    },
    updateFilter(input) { // update search filter
      this.$store.dispatch('updateFilter', input);
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-data-table {
  cursor: pointer;
}
</style>