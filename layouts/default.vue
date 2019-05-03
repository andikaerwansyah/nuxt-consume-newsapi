<template>
  <v-app class="black" dark>
    <v-toolbar
      fixed
      app
      clipped-left
    >
      <v-toolbar-title class="white--text font-weight-light" v-text="title" />
      <v-spacer />
      <v-btn
        flat
        class="text-none"
        color="yellow darken-1"
        href="https://github.com/andikaerwansyah/nuxt-consume-newsapi"
        target="_blank"
      >
        <v-icon left>
          mdi-github-circle
        </v-icon>
        GitHub
      </v-btn>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      fixed
      app
    >
      <p class="mx-auto mb-0">
        <v-icon small color="yellow">
          mdi-flash
        </v-icon>
        Powered By
        <a class="footer" href="https://newsapi.org/">Newsapi.org</a>
        &
        <a class="footer" href="https://vuetifyjs.com/en/">Vuetifyjs.com</a>
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'ITechNews'
    }
  }
}
</script>

<style>
.footer {
  text-decoration: none;
  color: white;
}
</style>
