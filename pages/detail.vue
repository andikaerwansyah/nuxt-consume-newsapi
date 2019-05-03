<template>
  <div>
    <v-layout row wrap>
      <v-img
        :src="article.urlToImage"
        aspect-ratio="5.2"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-img class="mx-auto" :src="article.urlToImage" contain height="300" max-height="300" />
          </v-flex>
        </v-layout>
      </v-img>
    </v-layout>
    <v-container grid-list-xs>
      <v-layout column>
        <v-flex xs12>
          <p class="headline">
            {{ article.title }}
          </p>
        </v-flex>
        <v-flex xs12>
          <p>
            {{ article.content }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
