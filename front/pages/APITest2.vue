<template>
  <section class="container">
    <h1>APIテストのページ2</h1>
    <p>サーバーからいっぱいデータが送られてるね！</p>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        items: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:3001/test2')
        .then(response => (this.items = response.data.items))
    }
  }
</script>