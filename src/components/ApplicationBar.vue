<template>
  <v-app-bar
    :src="img"
    app
    clipped-left
    dark
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click.stop="hideNavigation"></v-app-bar-nav-icon>

    <v-toolbar-title>Adopt A Pet</v-toolbar-title>
      
    <div class="flex-grow-1"></div>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'application-bar',
  data() {
    return {
      img: 'https://picsum.photos/1920/1080?random'
    }
  },
  methods: {
    hideNavigation() {
      this.$store.dispatch('hideNavigation');
    }
  }
}
</script>