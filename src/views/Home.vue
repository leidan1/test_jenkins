<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      quesiotn: 1 // 注释
    }
  },
  components: {
    HelloWorld
  },
  created () {
    console.log(this.$api)
  }
}
</script>
