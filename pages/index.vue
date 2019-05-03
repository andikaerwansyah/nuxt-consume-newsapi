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
        <v-flex xs12>
          <h1 class="title mb-2 font-weight-light">
            Berita Teknologi Terkini
          </h1>
        </v-flex>
        <v-flex v-for="item in posts" :key="item.key" xs12 sm6 md4>
          <v-card id="news-card-bra" class="flexcard" height="100%">
            <v-img
              :src="item.urlToImage"
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
      }
    }
  },
  computed: {
    showHideFabButton() { return this.$store.state.showFabButton }
  },
  async mounted() {
    this.initLoading = true
    await axios(
      'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=ff3a13d653734a80b690b3c4938f29a3',
      {
        crossDomain: true
      }
    ).then(({ data }) => {
      this.allPost = data.articles
      data.articles.map((item, key) => {
        if (item.destription !== null && this.posts.length < 9) {
          this.posts.push(item)
        }
      })
    })
    this.initLoading = false
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
