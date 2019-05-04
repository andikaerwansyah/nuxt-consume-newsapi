<template>
  <div>
    <hero />
    <v-container grid-list-md>
      <v-layout v-if="initLoading" column wrap justify-center align-center>
        <v-avatar
          size="38px"
          color="white"
        >
          <v-progress-circular
            indeterminate
            color="yellow darken-3"
          />
        </v-avatar>
        <p class="body-2">
          Menghimpun berita..
        </p>
      </v-layout>
      <v-layout v-if="!initLoading" row wrap>
        <v-flex v-for="item in posts" :key="item.key" xs12 sm6 md4>
          <v-card id="news-card-bra" class="flexcard" height="100%">
            <v-img
              :src="item.urlToImage"
              :lazy-src="lazyImage"
              aspect-ratio="1.76"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">
                      {{ item.title }}
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text class="grow">
              <div>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </v-card-text>
            <v-card-actions class="pa-3">
              <p class="caption text-truncate">
                {{ item.author }}
              </p>
              <v-spacer />
              <v-btn
                class="text-none"
                small
                outline
                round
                color="yellow"
                @click="readMore(item)"
              >
                Selengkapnya
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-btn
          v-if="initLoading === false"
          :loading="loading"
          :disabled="loading"
          round
          class="mx-auto black--text text-none"
          color="yellow"
          @click="loadMore()"
        >
          Berita Lainnya
        </v-btn>
      </v-layout>
      <v-fab-transition>
        <v-btn
          v-show="this.$store.state.showFabButton"
          fixed
          dark
          fab
          bottom
          right
          color="yellow"
          @click="$vuetify.goTo(0, goToOptions)"
        >
          <v-icon color="black">
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </v-fab-transition>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },
  data() {
    return {
      allPost: [],
      posts: [],
      current: 9,
      loading: false,
      initLoading: false,
      goToOptions: {
        duration: 500,
        offset: 64,
        easing: 'easeInOutCubic'
      },
      lazyImage: 'data:image/png;base64,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'
    }
  },
  computed: {
    showHideFabButton() { return this.$store.state.showFabButton }
  },
  async mounted() {
    try {
      this.initLoading = true
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=ff3a13d653734a80b690b3c4938f29a3',
        {
          crossDomain: true
        })
      this.allPost = response.data.articles
      response.data.articles.map((item, key) => {
        if (item.description !== null && this.posts.length < 9) {
          this.posts.push(item)
          this.initLoading = false
        }
      })
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.posts = []
        this.current += 9
        this.allPost.map((item, key) => item.description !== null && this.posts.length < this.current ? this.posts.push(item) : '')
        this.loading = false
      }, 3000)
    },
    readMore(data) {
      this.$store.commit('setArticle', data)
      this.$router.push({ 'path': '/detail' })
    }
  }
}
</script>

<style>
#news-card-bra {
  border-radius: 10px !important;
}

.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
