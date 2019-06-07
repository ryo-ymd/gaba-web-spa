<template>
  <section class="container">
    <h1>テストのページ</h1>
    <p>ページの切り替わりがふわーっとしてるでしょ？これがSPAのちからなのよ</p>
    <p>{{ testMessage }}</p>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <form v-on:submit.prevent="addNewTodo">
      <div class="form-group">
        <label for="new-item">新しいアイテムの追加</label>
        <input
          v-model="newItemText"
          id="new-item"
          placeholder="好きな文章を入力しよう"
          class="form-control"
        >
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </section>
</template>

<script>
  module.exports = {
    data() {
      return {
        testMessage: "これはJavaScriptで制御された文だよ！",
        items: [
          {message: '1つ目のアイテム'},
          {message: '2つ目のアイテム'}
        ],
        newItemText: '',
      }
    },
    methods: {
      addNewTodo() {
        this.items.push({
          message: this.newItemText
        })
        this.newItemText = ''
      }
    }
  }
</script>