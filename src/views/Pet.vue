<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-img
      class="white--text"
      height="400px"
      :src="dynamicPicture"
    >
      <v-card-title class="align-end fill-height">{{ selectedItem.name }}</v-card-title>
    </v-img>

    <v-card-text>
      <span class="text--primary">
        <span>Gender: {{ selectedItem.gender }}</span><br>
        <span>Weight: {{ selectedItem.weight }} lb</span><br>
        <span>Age: {{ selectedItem.age }} months</span><br>
        <span>Friendly with other animals: {{ selectedItem.friendly }}</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn 
        @click="adopt"
        text
        color="orange"
      >
        Adopt
      </v-btn>
      <v-btn 
        @click="back"
        text
        color="orange"
      >
        Back
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import routes from '../data/constants/routes';

export default {
  name: 'pet',
  data() {
    return {
      id: null
    }
  },
  computed: {
    ...mapGetters(['selectedItem']),
    dynamicPicture() {

      if(this.selectedItem.species === 'Dog') {
        return require('../assets/img/dog.jpg')
      } else {
        return require('../assets/img/cat.jpeg')
      }
    }
  },
  mounted() {
    this.getId();
  },
  methods: {
    adopt() {
      alert('Go to your local shelter and save some life.');
    },
    back() {
       this.$router.push(`${routes.BASE_URL}`);
    },
    getId() {
      if (this.$route.params.id) {
        this.id = this.$route.params.id;
      }
    }
  }
}
</script>