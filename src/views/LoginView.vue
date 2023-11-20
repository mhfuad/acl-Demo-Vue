<template>
  <div>
    <b-card class="mt-3" header="Login Page">
      <h1>{{ $store.state.count }}</h1>
      <b-form @submit="onSubmit" @reset="onReset">
        
        <b-form-group
          id="input-group-1"
          label="User id:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        <p>Don't have Account? </p><RouterLink to="/registration">Registration</RouterLink>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {

    data() {
      return {
        form: {
          username: 'fuad@gmail.com',
          password: '123123'
        },
        show: true
      }
    },
    methods: {
      ...mapActions('auth', ['signIn','attempt']),

      onSubmit(event) {

        event.preventDefault()

        this.$store.dispatch('auth/signIn', this.form)
        .then((res)=>{
          this.$router.replace({
            name: 'home'
          })
        })
        .catch((err)=>{
          alert(err)
        });
      },

      onReset(event) {
        event.preventDefault()
          this.form.email = ''
          this.form.password = ''
          this.$nextTick(() => {
        })
      }
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
  