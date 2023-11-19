<template>
    <div>
      <b-card class="mt-3" header="Registraion Page">
        <h1>{{ $store.state.count }}</h1>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="First Name"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.firstName"
                type="email"
                placeholder="First Name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Last Name"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Last Name"
                required
                ></b-form-input>
            </b-form-group>

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
          <p>Already have Account? </p><RouterLink to="/">Login</RouterLink>
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
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            type: '',
            password: ''
          },
          show: true
        }
      },
      methods: {
        ...mapActions('auth', ['signIn']),
        onSubmit(event) {
          event.preventDefault()
          this.$store.dispatch('auth/signIn', this.form);
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
    