<template>
  <v-layout row wrap>
    <v-img :src="imgDefault" />
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      imgDefault: '/banner-img.png'
    }
  }
}
</script>
