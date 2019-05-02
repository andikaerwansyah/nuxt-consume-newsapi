<template>
  <v-container grid-list-xs>
    <v-layout column>
      <v-flex xs12>
        <v-img :src="article.urlToImage" aspect-ratio="1.7">
        </v-img>
      </v-flex>
      <v-flex xs2>
        <p>
          {{ article.content }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    article() { return this.$store.state.article }
  }
}
</script>

<style>

</style>
