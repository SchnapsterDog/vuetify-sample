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
      <v-col 
        cols="12">
        <router-view />
      </v-col> 	      
    </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'app-content'
}
</script>