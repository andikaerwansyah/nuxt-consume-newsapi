<template>
  <v-layout row wrap>
    <v-img
      :src="imgDefault"
      max-height="300"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-container fill-height fluid>
        <v-layout class="hidden-sm-and-up" column fill-height justify-center align-center>
          <span id="hero-ff" class="pa-1 yellow title black--text">Top Headline</span>
          <span id="hero-ff" class="pa-1 yellow title black--text">Indonesian Tech News</span>
        </v-layout>
        <v-layout class="hidden-sm-and-down" column fill-height justify-center align-center>
          <span id="hero-ff" class="pa-1 yellow display-1 black--text">Top Headline</span>
          <span id="hero-ff" class="pa-1 yellow display-1 black--text">Indonesian Tech News</span>
        </v-layout>
      </v-container>
    </v-img>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      imgDefault: 'https://placeimg.com/1000/300/tech/grayscale'
    }
  }
}
</script>

<style>
#hero-ff {
  font-family: 'Gugi', cursive !important;
}
</style>
