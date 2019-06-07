<template>
  <section class="container">
    <h1>APIテストのページ</h1>
    <p>この下のメッセージはサーバーから送られたデータです</p>
    <p>{{ message }}</p>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        message: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:3001/test1')
        .then(response => (this.message = response.data.message))
    }
  }
</script>