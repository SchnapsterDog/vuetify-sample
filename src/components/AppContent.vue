<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <div class="grow">
        <router-view /> 
      </div>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'app-content'
}
</script>