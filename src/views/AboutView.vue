<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="getData">获取后端数据</button>
  <br>
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
  <br>
  <h1>新增图书</h1>
  <form>
    id<input type="text" v-model="form.Id">
    name<input type="text" v-model="form.Name">
    desc<input type="text" v-model="form.Desc">
    <button @click="createData">提交</button>
  </form>

</template>

<script>
  export default {
    data(){
      return{
        name:"test",
        userData:'',
        form:{
          Id:"",
          Name:"",
          Desc:"",
        }
      }
    },
    methods:{
      getData(){
        this.$http.get('/api/v1/booklist').then(data =>{
          console.log(data)
          this.userData = data.data.books;
        })
      },
      createData(event){
        this.$http.postForm('/api/v1/book',this.form)
        event.preventDefault();
        // console.log(JSON.stringify(this.form))
      }
    },
    created() {
      this.getData()
    }
  }
</script>