<template>
    <div>
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

            <div class="wrapper">

            <nav>
                <RouterLink to="/home">Home</RouterLink> | 
                <RouterLink to="/about">About</RouterLink> | 
                <RouterLink to="/student">Student</RouterLink> | 
                {{ user }} |
                <a href="" @click.prevent="signOut">Sign out</a>
            </nav>
            </div>
        </header>
        <router-view />
        <footer>Acl demo footer</footer>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        methods: {
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),

            signOut(){
                this.signOutAction().then(()=>{
                    this.$router.replace({
                        name: 'login'
                    })
                })
            }
        }
    }
</script>
