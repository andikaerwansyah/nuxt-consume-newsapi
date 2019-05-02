<template>
  <v-app dark>
    <v-toolbar
      fixed
      app
      clipped-left
    >
      <v-avatar
        size="42px"
        tile
      >
        <img src="https://pbs.twimg.com/profile_images/942571181051400192/rudqtcNK_400x400.jpg" alt="alt">
      </v-avatar>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn flat class="text-none" color="yellow">
        <v-icon left>mdi-github-circle</v-icon>
        GitHub
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span class="ml-2">Powered By <a id="footer" href="https://newsapi.org/">Newsapi.org</a> &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nuxt NewsAPI'
    }
  }
}
</script>

<style>
#footer {
  text-decoration: none;
}
</style>
