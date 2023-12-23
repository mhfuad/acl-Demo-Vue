<template>
  <div class="student">
    <h1>This is an Student page</h1>
    <RouterLink to="/student-create">create</RouterLink>
    <b-table striped hover :items="students">
      <template #cell(action)="row">
        <p>oi</p>
        <b-button variant="danger" @click="deleteRow(row.item)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {

    data() {
      return {
        students:[],
      }
    },
    methods: {
      ...mapActions("student", ["allStudent"]),

      async getAllStudent(){
        let res = await this.$store.dispatch("student/allStudent")
        this.students = this.$store.state.student.students
      },
      deleteRow(id){

      }
    },
    created(){
      this.getAllStudent();
    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  