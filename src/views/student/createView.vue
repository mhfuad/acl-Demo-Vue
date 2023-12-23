<template>
    <div>
        <h1>Student Create</h1>
        <RouterLink to="/student">All Student</RouterLink>

        <b-card class="mt-3" header="Student Create Page">
            <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="Name: "
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    placeholder="Name"
                    required
                ></b-form-input>
            </b-form-group>
    
            <b-form-group id="input-group-2" label="Father's name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    type="text"
                    v-model="form.fatherName"
                    placeholder="Password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Mother's name:" label-for="input-3">
                <b-form-input
                    id="input-2"
                    type="text"
                    v-model="form.motherName"
                    placeholder="Password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Address:" label-for="input-4">
                <b-form-textarea
                    id="textarea"
                    v-model="form.address"
                    placeholder="Full Address..."
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
            </b-form-group>
    
            <b-button type="submit" variant="success">Create</b-button>
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
            name: "Fuad",
            fatherName: "Abdul Motalib",
            motherName: "Saleha begum",
            address: "Dammy address"
        },
        show: true
    }
    },
    methods: {
        ...mapActions("student", ["create"]),

        async onSubmit(event) {

            event.preventDefault()

            let res = await this.$store.dispatch('student/create', this.form)
            if(res.status ==200){
                this.$router.push({
                    path: 'student',
                })
            }
        },

        onReset(event) {
            event.preventDefault()
            this.form = ''
            this.form.password = ''
            this.$nextTick(() => {})
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
    