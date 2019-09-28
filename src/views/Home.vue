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
      class="elevation-1 my-data-table"
    >    
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'

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
      const route = '/pet';
      this.$router.push(`${route}/${row.id}`);
    },
    updateSortedColumns(columns) { // update sorted
      this.$store.dispatch('updateSortedColumns', columns);
    },
    updateFilter(input) {
      this.$store.dispatch('updateFilter', input);
    }
  }
}
</script>