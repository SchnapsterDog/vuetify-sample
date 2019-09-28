<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <router-view /> 
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'app-content'
}
</script>