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
          <v-layout row wrap>
            <p>
              {{ article.source.name }}
            </p>
            <v-spacer></v-spacer>
            <p>
              {{ article.publishedAt | publishTime }}
            </p>
          </v-layout>
          <p>
            {{ article.content }}
          </p>
        </v-flex>
        <v-btn round :href="article.url" target="_blank" class="yellow--text mx-auto text-none" color="blue-grey darken-3">
          Lanjutkan Membaca
          <v-icon right>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    publishTime: (value) => {
      if (value) {
        return moment(String(value)).format('hh:mm DD/MM/YYYY')
      }
    }
  },
  computed: {
    article() { return this.$store.state.article }
  }
}
</script>

<style>

</style>
