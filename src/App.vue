<template>
  <v-app id="inspire">
    
    <app-navigation></app-navigation>

    <app-top-bar></app-top-bar>

    <app-content></app-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import ApplicationBar from '@/components/ApplicationBar.vue';
import AppContent from '@/components/AppContent.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    appNavigation: NavigationDrawer,
    appTopBar: ApplicationBar,
    AppContent,
    AppFooter
  }
};
</script>
