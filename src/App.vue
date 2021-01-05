<template>
  <v-app>
    <v-main>
      <PageLoader />
        <router-view />
    </v-main>
  </v-app>
</template>

<script>
import PageLoader from './components/PageLoader'

export default {
  name: 'App',

  components: {
    PageLoader
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
*{
  background-color: rgb(224, 221, 216);
}
</style>