<template>
  <div>
    <v-container grid-list-md>
      <h1 class="title mb-2 font-weight-light">
        Berita Teknologi Terkini
      </h1>
      <v-layout row wrap>
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
                <p class="text-truncate">
                  {{ item.description }}
                </p>
              </div>
            </v-card-text>
            <v-card-actions class="pa-3">
              <p class="caption">
                {{ item.author }}
              </p>
              <v-spacer />
              <v-btn small outline round color="yellow">
                Read
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-btn class="mx-auto black--text" color="yellow">
          Berita Lainnya
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      allPost: [],
      posts: [],
      current: 9
    }
  },
  mounted() {
    axios(
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
