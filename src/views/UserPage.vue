<template>
    <div class="cc">
      <button @click="getData">获取后端数据</button>
      <h1>图书数据表</h1>
      <table border="1">
        <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Desc</td>
          <td>User</td>
        </tr>
        </thead>
        <tbody v-for="row in userData" :key="row.id">
        <tr>
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.desc}}</td>
          <td>{{row.user}}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "UserPage",
  data(){
    return{
      userData:'',
    }
  },
  methods:{
    getData(){
      this.$http.get('/api/v1/booklist').then(data=>{
        console.log(data)
        this.userData = data.data.books;
      })
    }
  }

}
</script>

<style scoped>
  .cc{
    background-color: #42b983;
  }
</style>