<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    }
  }
</script>

<template>
  <div class="about">
    <h1>This is an home page</h1>
    {{ user }}
  </div>
</template>
